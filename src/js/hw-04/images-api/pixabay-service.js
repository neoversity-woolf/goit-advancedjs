import { BASE_URL, API_KEY, PER_PAGE } from './config.js';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

const paramsObj = {
  key: API_KEY,
  per_page: PER_PAGE,
  safesearch: true,
  image_type: 'photo',
  orientation: 'horizontal',
};

export const fetchImages = async ({ searchQuery, currentPage: page } = {}) => {
  console.log(searchQuery, page);
  const response = await axios({
    params: { ...paramsObj, q: searchQuery, page },
  });
  const { data, status } = response;
  const totalPages = Math.ceil(data.total / PER_PAGE);

  console.log('totalPages', totalPages);
  console.log('currentPage', page);
  if (status !== 200) {
    console.log('Sorry, something went wrong on server.');
    return {};
  }
  if (!data.total) {
    console.log(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return {};
  }

  if (page > totalPages || totalPages === 1) {
    console.log('End of collection');
    return data;
  }
  if (page < 2) {
    alert(`Hooray! We found ${data.totalHits} images.`);
  }

  return data;
};
