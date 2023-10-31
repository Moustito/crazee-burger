import { styled } from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";

export default function Navbar({ username }) {
  function handleClick() {
    window.location.reload();
  }

  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={handleClick} />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 70px;

  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0px 0px;
  background: ${theme.colors.white};

  .LeftSide {
    background: pink;
  }

  .logo-order-page:hover {
    cursor: pointer;
  }
`;
