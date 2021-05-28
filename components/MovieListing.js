import { toUpper, compose, path, slice } from "ramda";
import { MovieItem } from "@/components/ComponentMap";
import { useGetPopularMovies } from "@/hooks/index";
import { formatReleaseDate } from "@/utils/formatReleaseDate";
import siteSettings from "@/config/siteSettings";
import style from "@/styles/MovieListing.module.scss";

// export async function getServerSideProps() {
//   const data = useGetPopularMovies();
//   return { props: { data } };
// }
const renderPageTitle = ({ meta }) => (
  <h2 className={style.pageTitle}>{toUpper(meta?.initalPageTitle)}</h2>
);

const buildMovieListing = (data) => {
  if (data?.length) {
    return (
      <div className={style.gridContainer}>
        {data.map((item) => (
          <MovieItem
            title={item.title}
            releaseDate={formatReleaseDate(item.release_date)}
            // posterPath={`${siteSettings.app.movieImageUrl}/${item.poster_path}`}
            posterPath={item.poster_path}
            key={item.id}
            showDetails={false}
          />
        ))}
      </div>
    );
  }
  return null;
};

export default function MovieListing(props) {
  // const movieData = useGetPopularMovies(props.data);

  const movieData = {
    results: [
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://dummyimage.com/276x358/fff/aaa",
      },
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://dummyimage.com/276x358/fff/aaa",
      },
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://dummyimage.com/276x358/fff/aaa",
      },
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://dummyimage.com/276x358/fff/aaa",
      },
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://dummyimage.com/276x358/fff/aaa",
      },
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://dummyimage.com/276x358/fff/aaa",
      },
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://dummyimage.com/276x358/fff/aaa",
      },
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://dummyimage.com/276x358/fff/aaa",
      },
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://dummyimage.com/276x358/fff/aaa",
      },
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://dummyimage.com/276x358/fff/aaa",
      },
      {
        title: "a special movie",
        id: "1234",
        release_date: "2021-05-05",
        poster_path: "https://dummyimage.com/276x358/fff/aaa",
      },
    ],
  };
  const getMovieItemData = path(["movieData", "results"]);
  const MovieList = compose(buildMovieListing, getMovieItemData);

  return (
    <main className="wrapper">
      {renderPageTitle(siteSettings)}
      <MovieList movieData={movieData} />
    </main>
  );
}
