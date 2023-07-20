import styled from "styled-components";

type StyleProps = {
  fontColor: string
};

export const StyledCheckBox = styled.p<StyleProps>(({ theme, fontColor }) => ({
  fontSize: theme.typography.medium.headline.size,
  color: fontColor,
}));