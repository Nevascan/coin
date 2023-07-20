export const spacing = (...values) => {
  return values.map((item) => `${item * 8}px`).join(" ");
};
