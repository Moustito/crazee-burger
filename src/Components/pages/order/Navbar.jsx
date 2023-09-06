import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="LeftSide">Left</div>
      <div className="RightSide">
        Right
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
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
  .RightSide {
    background: purple;
    font-family: "Opens Sans";
  }
`;
