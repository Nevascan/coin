export const spacing = (size) => {
  const arr: any = [];
  size.map((item) => arr.push(`${item * 8}px`));
  if (arr.length <= 4) return arr.join(" ");
};
