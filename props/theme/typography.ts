type props = {
  size: string;
  weight: number;
};

type variants = {
  display: props;
  headline: props;
  body: props;
  label: props;
};

export type TypographyProps = {
  large: variants;
  medium: variants;
  small: variants;
};
