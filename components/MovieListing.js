import { map, toUpper, compose, path, head } from "ramda";
import { MovieItem } from "@/components/ComponentMap";
import { useGetPopularMovies } from "@/hooks/index";
import siteSettings from "@/config/siteSettings";
import style from "@/styles/MovieListing.module.scss";

// export async function getServerSideProps() {
//   // const data = useGetPopularMovies();
//   const data = [{ title: 'a special movie', id: '1234', release_date="2021-05-05", poster_path="https://placedog.net/500" }]
//   return { props: { data } };
// }
const renderPageTitle = ({ meta }) => (
  <h2 className={style.pageTitle}>{toUpper(meta?.initalPageTitle)}</h2>
);

const buildMovieListing = (data) => {
  if (data?.length) {
    return data.map((item) => (
      <>
        {renderPageTitle(siteSettings)}
        <MovieItem
          title={item.title}
          releaseDate={item.release_date}
          // posterPath={`${siteSettings.app.movieImageUrl}/${item.poster_path}`}
          posterPath={item.poster_path}
          key={item.id}
          showDetails={false}
        />
      </>
    ));
  }
  // return null;
};

export default function MovieListing(props) {
  // const movieData = useGetPopularMovies(props.data);

  const movieData = {
    results: [
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://placedog.net/500",
      },
    ],
  };
  const getMovieItemData = path(["movieData", "results"]);
  const MovieList = compose(buildMovieListing, getMovieItemData);

  return (
    <>
      <MovieList movieData={movieData} />
    </>
  );
}
