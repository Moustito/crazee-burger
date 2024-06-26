import styled from "styled-components";
import { theme } from "../../theme";

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  background: #292729;
  color: ${theme.colors.primary};
`;
