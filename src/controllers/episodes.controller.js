import axios from 'axios';
import { validationError } from '../utils/errors';
import config from '../config/config';
import { extractEpisodes } from '../extractor/extractEpisodes';

const episodesController = async (c) => {
  const id = c.req.param('id');

  if (!id) throw new validationError('id is required');

  const Referer = `/watch/${id}`;
  const idNum = id.split('-').at(-1);
  const ajaxUrl = `/ajax/v2/episode/list/${idNum}`;

  try {
    const { data } = await axios.get(config.baseurl + ajaxUrl, {
      headers: {
        Referer: Referer,
        ...config.headers,
      },
    });
    
    const response = extractEpisodes(data.html);
    return response;
  } catch (err) {
    console.log(err.message);

    throw new validationError('make sure the id is correct', { validIdEX: 'one-piece-100' });
  }
};

export default episodesController;
