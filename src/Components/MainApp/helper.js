import { getPopularMovies } from '../../utils/call';

export const getPopular = async () => {
  const response = await getPopularMovies();
  console.log(response);
};
