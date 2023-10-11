import { styled } from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";

export default function Navbar({ username }) {
  function handleRefresh() {
    window.location.reload(false);
  }

  return (
    <NavbarStyled>
      <Logo className="logo-hover" onClick={handleRefresh} />
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

  border-radius: 15px 15px 0px 0px;
  background: #fff;

  .LeftSide {
    background: pink;
  }

  .logo-hover:hover {
    cursor: pointer;
  }
`;
