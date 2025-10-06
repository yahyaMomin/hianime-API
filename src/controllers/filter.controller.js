import filterOptions from '../utils/filter';
import { axiosInstance } from '../services/axiosInstance';
import { validationError } from '../utils/errors';
import { extractListPage } from '../extractor/extractListpage';

const filterController = async (c) => {
  const {
    // will receive string and send as a string
    keyword = null,
    sort = null,

    // will recieve an array as string will "," saparated and send as "," saparated string
    genres = null,

    // will recieve as string and send as index of that string "see filterOptions"
    type = null,
    status = null,
    rated = null,
    score = null,
    season = null,
    language = null,
    page = 1,
  } = c.req.query();

  const pageNum = Number(page);
  const queryArr = [
    { title: 'keyword', val: keyword },
    { title: 'sort', val: sort },
    { title: 'type', val: type },
    { title: 'status', val: status },
    { title: 'rated', val: rated },
    { title: 'score', val: score },
    { title: 'season', val: season },
    { title: 'language', val: language },
    { title: 'genres', val: genres },
  ];

  const params = new URLSearchParams();

  queryArr.forEach((v) => {
    if (v.val) {
      switch (v.title) {
        case 'keyword':
          params.set('keyword', formatKeyword(v.val));
          break;
        case 'genres':
          params.set('genres', formatGenres(v.val));
          break;
        case 'sort': {
          const formattedSort = formatSort(v.val);
          if (formattedSort) params.set('sort', formattedSort);
          break;
        }
        default: {
          const formattedOption = formatOption(v.title, v.val);
          if (formattedOption) params.set(v.title, formattedOption);
        }
      }
    }
  });

  if (pageNum > 1) params.set('page', String(pageNum));

  const endpoint = keyword ? '/search' : '/filter';
  const queryString = params.toString();
  const url = queryString ? `${endpoint}?${queryString}` : endpoint;

  const result = await axiosInstance(url);

  console.log(result.message);

  if (!result.success) throw new validationError('something went wrong will queries');
  const response = extractListPage(result.data);
  return response;
};

const formatKeyword = (v) => v.toLowerCase();

const formatSort = (v) => {
  const index = filterOptions.sort.indexOf(v.toLowerCase().replace(' ', '_'));
  if (index === -1) return null;
  return filterOptions.sort[index];
};

const formatGenres = (v) => {
  let indexes = v
    .split(',')
    .map((genre) => filterOptions.genres.indexOf(genre.toLowerCase().replaceAll(' ', '_')))
    .filter((i) => i !== -1)
    .map((i) => i + 1);

  return indexes.length > 0 ? indexes.join(',') : '';
};

const formatOption = (k, v) => {
  const index = filterOptions[k].indexOf(v);
  if (index === -1) return null;
  return index.toString();
};
export default filterController;
