import { styled } from "styled-components";
import { theme } from "../../../../theme";
// import Basket from "./Basket";
import Menu from "./Menu";
import AdminPanel from "../adminPanel/AdminPanel";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <Menu />
      <AdminPanel />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex: 1;
  overflow-y: scroll;
  
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
