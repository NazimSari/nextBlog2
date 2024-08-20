import { compareDesc } from "date-fns";
import { parseISO } from "date-fns/fp";

export const cx = (...className) => {
  return className.filter(Boolean).join(" ");
};

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
