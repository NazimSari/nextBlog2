export const cx = (...className) => {
  return className.filter(Boolean).join(" ");
};
