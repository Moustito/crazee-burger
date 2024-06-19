import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EditForm() {
  return (
    <EditFormStyled>
      <p>Cliquer sur un produit pour le modifier</p>
      <HiCursorClick className="icon" />
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 80px 70px;

  color: ${theme.colors.greyBlue};

  p {
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
