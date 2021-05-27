import dynamic from "next/dynamic";

const dynamicImports = {
  Header: dynamic(() => import("./Header")),
  Footer: dynamic(() => import("./Footer")),
  Loader: dynamic(() => import("./Loader")),
  MovieListing: dynamic(() => import("./MovieListing")),
  MovieDetails: dynamic(() => import("./MovieDetails")),
  MovieItem: dynamic(() => import("./MovieItem")),
  Layout: dynamic(() => import("./Layout")),
};

export const { Header, Footer, Loader, MovieDetails, MovieListing, MovieItem, Layout } =
  dynamicImports;
