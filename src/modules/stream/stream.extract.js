import megacloud from './parser/megacloud.js';
import { getServers } from '../servers/servers.handler.js';

/* =======================
   CONSTANTS
======================= */
const MEGAPLAY = 'https://megaplay.buzz/stream/s-2/';
const VIDWISH = 'https://vidwish.live/stream/s-2/';
const TYPE_DUB = 'dub';
const REFERER = 'https://megacloud.tv';

/* =======================
   MAIN FUNCTION
======================= */
export default async function streamExtract({ selectedServer, id }) {
  if (isEmbeddedStream(selectedServer)) {
    return buildEmbeddedStream(selectedServer, id);
  }

  const stream = await megacloud({ selectedServer, id });
  if (!hasFile(stream)) return stream;

  if (needsSubFallback(selectedServer, stream)) {
    await attachSubtitlesFromSub(stream, selectedServer, id);
  }

  return { ...stream, referer: REFERER };
}

/* =======================
   HELPERS
======================= */

const isEmbeddedStream = (server) => server.name === 'megaplay' || server.name === 'vidwish';

const buildEmbeddedStream = (server, id) => {
  const episodeId = id.split('ep=').pop();

  const END_PATH = `${episodeId}/${server.type}`;

  const END_URL = server.name === 'megaplay' ? MEGAPLAY + END_PATH : VIDWISH + END_PATH;

  return {
    streamingLink: END_URL,
    servers: server.name,
  };
};

const hasFile = (stream) => Boolean(stream?.link?.file);

const needsSubFallback = (server, stream) => {
  if (server.type !== TYPE_DUB) return false;

  const captions =
    stream.tracks?.filter((t) => t.kind === 'captions' || t.kind === 'subtitles') ?? [];

  return captions.length === 0;
};

const attachSubtitlesFromSub = async (stream, server, id) => {
  try {
    const allServers = await getServers(id);

    const subServer = allServers?.sub?.find(
      (s) => s.name === server.name || s.index === server.index
    );

    if (!subServer?.id) return;

    const subStream = await megacloud({
      selectedServer: subServer,
      id,
    });

    const subtitles =
      subStream?.tracks?.filter((t) => t.kind === 'captions' || t.kind === 'subtitles') ?? [];

    if (subtitles.length === 0) return;

    stream.tracks = [...(stream.tracks ?? []), ...subtitles];
  } catch {
    // no need to thorw error for subtitles
  }
};
