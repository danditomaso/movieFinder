import React from "react";
export default function MovieItem({ title, releaseDate, posterPath, showDetails = true }) {
  return (
    <>
      <div>
        <img src={posterPath} />
        <p>{title}</p>
        <p>{releaseDate}</p>
      </div>
    </>
  );
}
