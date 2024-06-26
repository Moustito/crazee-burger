import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketBody from "./BasketBody";

export default function Basket() {

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
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
