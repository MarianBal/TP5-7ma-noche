import { moviesTypes } from './../constants/actionTypes/movies';

const popularManagement = (state = [], action) => {
  switch (action.type) {
    case moviesTypes.addPopular:
      return state;
    default:
      return state;
  }
};

export default popularManagement;
