export const cx = (...className) => {
  className.filter(Boolean).join(" ");
};
