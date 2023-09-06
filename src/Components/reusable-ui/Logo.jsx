import { styled } from "styled-components";
import logo from "../../assets/images/logo-orange.png";
import {theme} from '../../theme/index'

export default function Logo() {
  return (
    <LogoStyled>
      <h1>Crazee</h1>
      <img src={logo} alt="Crazee Burger Logo" />
      <h1>Burger</h1>
      </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: ${theme.colors.primary};
    font-family: 'Amatic SC', cursive;
    font-weight: ${theme.fonts.weights.bold};
    font-size: 110px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  img {
    object-fit: contain;
    object-position: center;
    height: 150px;
    margin: 0 5px;
  }
`;