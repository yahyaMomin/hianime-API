import axios from 'axios';
import crypto from 'crypto';
import NodeCache from 'node-cache';
import { v4 as uuidv4 } from 'uuid';
import { validationError } from '../utils/errors';
import config from '../config/config';

const cache = new NodeCache({ stdTTL: 600 }); // 600 seconds = 10 minutes

const SECRET_KEY = process.env.SECRET_KEY || 'update-this-secret';

/**
 * generateSignedUrl
 * - Creates a signature for a resourceId
 * - Adds an expiration time (UNIX timestamp, 10 minutes from now)
 * - Returns a local endpoint: /segment/resource?resourceId=xxx&sig=yyy&exp=zzz
 */
function generateSignedUrl(resourceId, type) {
  const exp = Math.floor(Date.now() / 1000) + 600; // 600 seconds = 10 minutes
  const signature = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(`${resourceId}${exp}${type}`)
    .digest('hex');

  return `/fetch/segment/resource?resourceId=${resourceId}&sig=${signature}&exp=${exp}`;
}

/**
 * verifySignedUrl
 * - Checks if the signature matches
 * - Checks if the expiration hasn't passed
 */
function verifySignedUrl(resourceId, sig, exp, type) {
  const now = Math.floor(Date.now() / 1000);
  if (parseInt(exp, 10) < now) {
    return false;
  }

  const expectedSig = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(`${resourceId}${exp}${type}`)
    .digest('hex');

  return sig === expectedSig;
}

/**
 * GET /
 * - Example route for fetching a remote M3U8
 *   based on ?url=<some-remote-m3u8>.
 * - Rewrites all lines that do *not* start with '#' (resources) to a signed local URL.
 * - Ref parameter is optional and can be used to set the Referer header.
 */

export const proxyController = async (c) => {
  const { url, ref } = c.req.query();

  if (!url || typeof url !== 'string') {
    throw new validationError('No URL provided');
  }
  const headers = {};

  if (ref && typeof ref === 'string') {
    headers['Referer'] = ref;
  }
  const response = await axios.get(url, {
    headers: {
      ...headers,
      ...config.headers,
    },
    responseType: 'text',
  });
  let m3u8Content = response.data;

  if (!m3u8Content.startsWith('#EXTM3U')) {
    return m3u8Content;
  }
  const lines = m3u8Content.split('\n');

  const transformed = lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      return line;
    }

    const resourceId = uuidv4();

    const absoluteUrl = new URL(trimmed, url).href;

    cache.set(resourceId, absoluteUrl);

    const signedUrl = generateSignedUrl(resourceId, 'segment');
    return signedUrl;
  });

  const newM3U8 = transformed.join('\n');

  c.res.headers.set('Content-Type', 'application/vnd.apple.mpegurl');
  console.log('success');

  return newM3U8;
};

/**
 * GET /segment/resource
 * - The player will request this route whenever it sees
 *   a line in the M3U8 like "/segment/resource?resourceId=xx&sig=yyy&exp=zzz"
 */
export const segmentController = async (c) => {
  const { resourceId, sig, exp } = c.req.query();

  if (!resourceId || !sig || !exp) {
    throw new validationError('Missing signed URL params');
  }
  if (!verifySignedUrl(resourceId, sig, exp, 'segment')) {
    throw new validationError('Invalid or expired signed URL');
  }
  const realUrl = cache.get(resourceId);
  if (!realUrl) {
    throw new validationError('Resource not found or expired');
  }
  const segmentResp = await axios.get(realUrl, {
    headers: {
      ...config.headers,
    },
    responseType: 'arraybuffer',
  });

  let contentType = segmentResp.headers['content-type'];
  if (!contentType) {
    contentType = 'application/octet-stream';
  }
  c.res.headers.set('Content-Type', contentType);
  return segmentResp.data;
};

export const imageController = async (c) => {
  const { url, ref } = c.req.query();
  if (!url || typeof url !== 'string') {
    throw new validationError('No URL provided');
  }

  const headers = {};
  if (ref && typeof ref === 'string') {
    headers['Referer'] = ref;
  }

  const response = await axios.get(url, {
    responseType: 'arraybuffer',
    headers: {
      ...headers,
      ...config.headers,
    },
  });

  const contentType = response.headers['content-type'];
  c.res.headers.set('Content-Type', contentType);
  return response.data;
};
