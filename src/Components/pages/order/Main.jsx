import { styled } from "styled-components";
import { theme } from "../../../theme";
import ProductCard from "./ProductCard";

export default function Main() {
  return (
    <MainStyled>
      <ProductCard />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-gap: 85px;
  justify-content: center;


  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
