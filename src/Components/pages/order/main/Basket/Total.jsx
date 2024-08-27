import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { calculateSumToPay, formatPrice } from "../../../../../utils/maths";

export default function Total() {
  const { menuBasket, menu } = useContext(OrderContext);

  const sumtToPay = calculateSumToPay(menuBasket, menu);
  
  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amout">{formatPrice(sumtToPay)}</span>
      </TotalStyled>
    </Header>
  );
}

const TotalStyled = styled.div`
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${theme.colors.primary};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
