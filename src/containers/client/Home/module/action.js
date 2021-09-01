import movieApi from "apis/movieApi";
import {
  FETCH_ALL_MOVIE_FAIL,
  FETCH_ALL_MOVIE_REQUEST,
  FETCH_ALL_MOVIE_SUCCESS,
} from "./type";

const actFetchAllMovieRequest = () => ({
  type: FETCH_ALL_MOVIE_REQUEST,
});

const actFetchAllMovieSuccess = (listMovie) => ({
  type: FETCH_ALL_MOVIE_SUCCESS,
  payload: listMovie,
});
const actFetchAllMovieFail = (error) => ({
  type: FETCH_ALL_MOVIE_FAIL,
  payload: error,
});

export const actFetchAllMoive = () => {
  return (dispatch,getState) => {
    dispatch(actFetchAllMovieRequest());
    movieApi
      .fetchAllMovieApi()
      .then((res) => {
        dispatch(actFetchAllMovieSuccess(res.data.content));
      })
      .catch((error) => {
        dispatch(actFetchAllMovieFail(error));
      });
  };
};
