import axios from 'axios';
import { validationError } from '../utils/errors';
import config from '../config/config';
import { extractCharacters } from '../extractor/extractCharacters';

const charactersController = async (c) => {
  const id = c.req.param('id');
  const page = c.req.query('page') || 1;

  if (!id) throw new validationError('id is required');

  const idNum = id.split('-').pop();
  const endpoint = `/ajax/character/list/${idNum}?page=${page}`;
  try {
    const Referer = `${config.baseurl}/home`;
    const { data } = await axios.get(config.baseurl + endpoint, {
      headers: {
        ...config.headers,
        Referer,
      },
    });

    const response = extractCharacters(data.html);

    return response;
  } catch (err) {
    console.log(err);

    throw new validationError('characters not found');
  }
};

export default charactersController;
