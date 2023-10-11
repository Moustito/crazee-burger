import { styled } from "styled-components";
import logo from "../../assets/images/logo-orange.png";
import { theme } from "../../theme/index";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className}>
      <h1>Crazee</h1>
      <img src={logo} alt="Crazee Burger Logo" onClick={onClick} />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(${(props) => (props.$scale ? 2.5 : 1)});

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px; // for Safari and Firefox
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
