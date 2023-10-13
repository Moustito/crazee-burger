import { PiUserCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme";

export default function Profil({ username }) {
  return (
    <ProfilStyled>
      <div className="Profil">
        <h1>
          Hey <span className="username">{username}</span>
        </h1>
        <Link to="/">Se déconnecter</Link>
      </div>
      <PiUserCircleFill className="icon" />
    </ProfilStyled>
  );
}

const ProfilStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    color: ${theme.colors.greyBlue};
    text-align: right;
    font-family: Open Sans;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.regular};
    line-height: 22px; /* 137.5% */

    .username {
      color: ${theme.colors.primary};
      font-weight: ${theme.fonts.weights.bold};
    }
  }

  a {
    color: ${theme.colors.greyBlue};
    text-align: right;
    font-family: Open Sans;
    font-size: ${theme.fonts.size.XXS};
    font-weight: ${theme.fonts.weights.regular};
    line-height: 14px; /* 140% */
    text-decoration: none;

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid ${theme.colors.greyBlue};
    }
  }

  .icon {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    color: ${theme.colors.greyBlue};
  }
`;
