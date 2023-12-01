import { styled } from "styled-components";
import { theme } from "../../../../theme";
// import Basket from "./Basket";
import Menu from "./Menu";
import Admin from "../admin/Admin";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <Menu />
        <Admin />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: calc(95vh - 10vh);
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: flex;

  .menu-and-admin {
    width: 100%;
    position: relative;
    overflow-y: hidden;
    display: grid;
  }
`;
