import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function EditForm() {
  const { productSelected } = useContext(OrderContext);

  return (
    <EditFormStyled>
      {productSelected && productSelected.title}
      <div className="unselectedProduct">
        <span>Cliquer sur un produit pour le modifier</span>
        <HiCursorClick className="icon" />
      </div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div`
  .unselectedProduct {
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
  }
`;
