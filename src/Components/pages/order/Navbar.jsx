import { styled } from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="LeftSide">Left</div>
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .LeftSide {
    background: pink;
  }
`;
