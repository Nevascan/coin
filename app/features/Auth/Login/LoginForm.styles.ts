import styled from "styled-components";
import { breakpoints } from "styles/defaultTheme";

export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;

  form {
    width: 250px;
    max-width: 350px;
    @media ${breakpoints.sm} {
      width: 350px;
    }
  }
  .typographys {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
