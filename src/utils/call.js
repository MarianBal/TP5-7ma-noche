import { getPopular } from './api';
import { caller } from './caller';

export const getPopularMovies = async () => {
  const response = await caller(getPopular());
  return response;
};
