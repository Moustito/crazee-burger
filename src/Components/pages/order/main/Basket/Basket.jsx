import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import BasketProducts from "./BasketProducts";
import EmptyBasket from "./EmptyBasket";
import { isEmpty } from "../../../../../utils/array";

export default function Basket() {
  const { menuBasket } = useContext(OrderContext);

  const TotalToPay = () => {
    return menuBasket
      .filter((product) => !isNaN(product.price))
      .reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const isBasketEmpty = isEmpty(menuBasket);

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(TotalToPay())} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}
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
