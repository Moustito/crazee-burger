import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Admin Button</div> */}
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  /* Style for admin button position */
  /* display: flex;
  align-items: center;
  gap: 60px; */
`;
