import { FC } from "react";
import { StyledCard } from "./Card.styles";

type CardProps = {
  children: any;
  padding?: number | number[];
  margin?: number | number[];
  mb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
};
export const Card: FC<CardProps> = ({
  children,
  padding = 0,
  margin = [],
  mb = 0,
  mt = 0,
  mr = 0,
  ml = 0,
}) => {
  return (
    <StyledCard
      padding={padding}
      margin={margin}
      mb={mb}
      mt={mt}
      mr={mr}
      ml={ml}
    >
      {children}
    </StyledCard>
  );
};
