import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
import { findObjectById } from "../../../../../utils/array";

export default function Total() {
  const { menuBasket, menu } = useContext(OrderContext);

  const sumtToPay = menuBasket.reduce((total, BasketProduct) => {
    const menuProduct = findObjectById(BasketProduct.id, menu);
    if (isNaN(menuProduct.price)) return total;
    total += menuProduct.price * BasketProduct.quantity;
    return total;
  }, 0);

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
