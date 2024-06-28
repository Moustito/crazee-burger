import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketBody from "./BasketBody";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function Basket() {
  const { menuBasket, handleBasketDelete } = useContext(OrderContext);

  const calculateTotalPrice = () => {
    return menuBasket
      .reduce((total, product) => total + product.price * product.count, 0)
      .toFixed(2);
  };

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(calculateTotalPrice())} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  height: calc(95vh - 10vh);

  display: flex;
  flex-direction: column;

  background-color: ${theme.colors.white};

  border-radius: 0px 0px 0px ${theme.borderRadius.extraRound};
`;
