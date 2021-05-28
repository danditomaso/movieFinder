import React from "react";
import style from "@/styles/MovieItem.module.scss";

export default function MovieItem({ title, releaseDate, posterPath, showDetails = true }) {
  return (
    <div>
      <img src={posterPath} className={style.movieBoxImage} />
      <div className={style.movieDetails}>
        <p>{title}</p>
        <p>{releaseDate}</p>
      </div>
    </div>
  );
}
