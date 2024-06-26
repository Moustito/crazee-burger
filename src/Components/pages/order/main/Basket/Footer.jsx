import styled from "styled-components";
import Header from "../../../../reusable-ui/Header";
import { theme } from "../../../../../theme";

export default function Footer() {
  return (
    <Header>
      <FooterStyled>Codé avec ❤️ et React.JS</FooterStyled>
    </Header>
  );
}

const FooterStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.white};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P2};
  font-weight: ${theme.fonts.weights.bold};
`;
