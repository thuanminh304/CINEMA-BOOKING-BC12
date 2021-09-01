import withData from "hocs/withData";
import React from "react";

function MovieList(props) {
  const { data } = props;
  return (
    <div className="col-6">
      <h3>MOVIE LIST</h3>
      {data.map((movie) => {
        return (
          <div key={movie.maPhim} className="card mb-3">
            <div className="card-body">
              <img src={movie.hinhAnh} width="100px" alt="" />
              <h4 className="card-title">{movie.tenPhim}</h4>
              <p className="card-text">{movie.moTa}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default withData(MovieList);
