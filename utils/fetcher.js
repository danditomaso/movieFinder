import { isEmpty } from "ramda";

export const fetcher = async (url) => {
  if (isEmpty(url)) return null;

  return fetch(url)
    .then((res) => res.json())
    .then((results) => results)
    .catch((err) => err);
};
