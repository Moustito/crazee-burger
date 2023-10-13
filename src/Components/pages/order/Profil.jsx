import { PiUserCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme";

export default function Profil({ username }) {
  return (
    <ProfilStyled>
      <div className="info">
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

  .info {
    text-align: right;
    color: ${theme.colors.greyBlue};
    font-weight: ${theme.fonts.weights.regular};

    h1 {
      font-size: ${theme.fonts.size.P0};
      line-height: 22px; /* 137.5% */

      .username {
        color: ${theme.colors.primary};
        font-weight: ${theme.fonts.weights.bold};
      }
    }

    a {
      font-size: ${theme.fonts.size.XXS};
      line-height: 14px; /* 140% */
      text-decoration: none;

      &:hover {
        cursor: pointer;
        border-bottom: 1px solid ${theme.colors.greyBlue};
      }
    }
  }

  .icon {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    color: ${theme.colors.greyBlue};
  }
`;
