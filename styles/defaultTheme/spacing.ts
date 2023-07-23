export const spacing = (...values) => {
  for (const value of values) {
    if (Array.isArray(value)) {
      return value.map((item) => `${item * 8}px`).join(" ");
    } else {
      return values.map((item) => `${item * 8}px`).join(" ");
    }
  }
};
