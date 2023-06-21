import { FC } from "react";
import { StyledCard } from "./Card.styles";

export const Card: FC<{ children: any }> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};
