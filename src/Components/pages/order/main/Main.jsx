import { styled } from "styled-components";
import { theme } from "../../../../theme";
// import Basket from "./Basket";
import Menu from "./Menu";
import Admin from "../admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import Basket from "./Basket";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: calc(95vh - 10vh);
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};

  display: flex;

  .menu-and-admin {
    width: 100%;
    position: relative;
    overflow-y: hidden;
    display: grid;
  }
`;
