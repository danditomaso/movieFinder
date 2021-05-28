import { append, compose, slice, is, prepend } from "ramda";

export function formatReleaseDate(str) {
  if (!is(String, str)) return null;

  const arrayString = [...str];
  return compose(append(")"), slice(0, 5), prepend("("))(arrayString);
}
