// api.js
import axios from 'axios';

const API_KEY = 'y0rbmRMFNRUNGXgKg2iOf9xEBQbiJVSirQlxWAlr7KYuZvEDcWxiSVrA';
const API_BASE_URL = 'https://api.pexels.com/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: API_KEY,
  },
});

export const fetchImages = (query, page = 1, perPage = 10) => {
  return api.get('/search', {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });
};
