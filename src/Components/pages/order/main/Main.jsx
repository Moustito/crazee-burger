import { styled } from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import Basket from "./Basket";
import MainRightSide from "./MainRightSide/MainRightSide";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      <Basket />
      <MainRightSide />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};

  display: grid;
  grid-template-columns: 25% 1fr;
`;
