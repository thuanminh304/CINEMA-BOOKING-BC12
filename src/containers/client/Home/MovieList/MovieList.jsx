import React, { Component } from "react";
import Loader from "components/Loader/Loader";
import MovieItem from "../MovieItem/MovieItem";
import { actFetchAllMoive } from "../module/action";
import { connect } from "react-redux";

//start
class MovieList extends Component {
  render() {
    const { listMovie, loading } = this.props;
    //loading trong khi chờ tải về danh sách phim
    if (loading)
      return (
        <div>
          <Loader />
        </div>
      );

    //return
    return (
      <div className="container">
        <div className="row">
          {listMovie.map((movie, index) => {
            return <MovieItem key={movie.maPhim} movie={movie} />;
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchAllMovie()
  }
}

//reducer
const mapStateToProps = (state) => {
  return {
    listMovie: state.movieReducer.listMovie,
    loading: state.movieReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllMovie: () => {
    dispatch(actFetchAllMoive());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
