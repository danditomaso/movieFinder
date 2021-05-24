import dynamic from "next/dynamic";

const dynamicImports = {
  Header: dynamic(() => import("./Header")),
  Loader: dynamic(() => import("./Loader")),
  MovieListing: dynamic(() => import("./MovieListing")),
  MovieDetails: dynamic(() => import("./MovieDetails")),
  Layout: dynamic(() => import("./Layout")),
};

export const { Header, Loader, MovieDetails, MovieListing, Layout } = dynamicImports;
