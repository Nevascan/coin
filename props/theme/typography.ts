type props = {
  size: string;
  weight: number;
};

type variants = {
  display: props;
  headline: props;
  body1: props;
  body2: props;
  label: props;
};

export type TypographyProps = {
  large: variants;
  medium: variants;
  small: variants;
};
