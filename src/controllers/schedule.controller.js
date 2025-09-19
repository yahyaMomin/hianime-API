import axios from 'axios';
import { validationError } from '../utils/errors';
import config from '../config/config';
import extractSchadule from '../extractor/extractSchadule';

async function schaduleController(c) {
  const today = new Date(Date.now());

  let todaysMonth = today.getMonth() + 1;
  let todaysDate = today.getDate();
  const todaysYear = today.getFullYear();

  let date = c.req.query('date') || todaysDate;

  if (date < 1) throw new validationError('date cant be less than 1');

  const lastDateOfMonth = new Date(todaysYear, todaysMonth, 0).getDate();

  if (date > lastDateOfMonth)
    throw new validationError(`date cant be more that ${lastDateOfMonth}`);

  todaysMonth = todaysMonth < 10 ? `0${todaysMonth}` : todaysMonth;
  date = date < 10 ? `0${date}` : date;

  const formattedDate = `${todaysYear}-${todaysMonth}-${date}`;

  const ajaxUrl = `/ajax/schedule/list?tzOffset=-330&date=${formattedDate}`;

  try {
    const { data } = await axios.get(config.baseurl + ajaxUrl, {
      headers: {
        ...config.headers,
        Referer: config.baseurl + '/home',
      },
      timeout: 10000,
    });

    // saveHtml(data.html, 'schadule.html');
    const meta = {
      date: formattedDate,
    };
    const response = extractSchadule(data.html);
    return { meta, response };
  } catch (error) {
    console.error(error.message);
    throw new validationError('page not found');
  }
}

export default schaduleController;
