import { getSettings } from './fetchSettings';
import { endpoints, url, apiKey, page } from './../constants/enums/url';

const apiURLConstructor = (baseURL, apiKey, page) => extension =>
  baseURL + extension + apiKey + page;
let baseUrl = url; //DEFAULT URL IS DEVELOPMENT
if (window._CONFIG_) {
  baseUrl = window._CONFIG_.API_URL;
}
const moviesApi = apiURLConstructor(baseUrl, apiKey, page);

export const getPopular = () => () => {
  return fetch(moviesApi(`${endpoints.popular}`), getSettings());
};
