import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { PiUserCircleFill } from "react-icons/pi";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <div>
        <h1>
          Hey <span className="username">{username}</span>
        </h1>
        <Link to="/">Se déconnecter</Link>
      </div>
      <PiUserCircleFill className="icon" />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    color: #747b91;
    text-align: right;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */

    .username {
      color: #ffa01b;
      font-weight: 700;
    }
  }

  a {
    color: #747b91;
    text-align: right;
    font-family: Open Sans;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 140% */
    text-decoration: none;

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid #747b91;
    }
  }

  .icon {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    color: #747b91;
  }
`;
