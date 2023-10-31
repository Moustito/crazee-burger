import { styled } from "styled-components";
import { theme } from "../../../theme";
import ProductCard from "./ProductCard";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

export default function Main() {
  return (
    <MainStyled>
      {fakeMenu2.map((Menu) => (
        <ProductCard key={Menu.id} datas={Menu} />
      ))}
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  display: grid;
  overflow-y: scroll;
  grid-template-columns: repeat(4, 240px);
  grid-gap: 85px;
  justify-content: center;
  padding: 50px 0;

  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
