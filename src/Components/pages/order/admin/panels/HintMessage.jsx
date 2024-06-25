import styled from "styled-components";
import { theme } from "../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

export default function HintMessage() {
  return (
    <HintMessageStyled className="unselectedProduct">
      <span>Cliquer sur un produit pour le modifier</span>
      <HiCursorClick className="icon" />
    </HintMessageStyled>
  );
}

const HintMessageStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 80px 70px;

  color: ${theme.colors.greyBlue};

  span {
    font-family: Amatic SC;
    font-size: ${theme.fonts.size.P3};
    font-weight: ${theme.fonts.weights.regular};
    line-height: 30.26px;
  }

  .icon {
    width: 24px;
    height: 24px;

    margin-left: 10px;
  }
`;
