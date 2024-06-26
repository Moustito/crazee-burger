import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";

export default function Basket() {
  const testProduct = false;

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <div className="panier">
        {testProduct ? <p>Vos produits...</p> : <p>Votre commande est vide.</p>}
      </div>
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.white};
  height: calc(95vh - 10vh);

  border-radius: 0px 0px 0px ${theme.borderRadius.extraRound};

  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px #00000033 inset;

  .panier {
    width: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    p {
      font-family: ${theme.fonts.family.stylish};
      font-size: 36px;
      font-weight: 400;
      line-height: 72px;
      text-align: center;
    }
  }
`;
