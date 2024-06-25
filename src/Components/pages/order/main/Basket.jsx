import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="total-price">
        <p>Total</p>
        <p>0.00€</p>
      </div>
      <div className="panier">
        <p>Votre commande est vide.</p>
      </div>
      <div className="panier-footer">Codé avec ❤️ et React.JS</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: purple;
  width: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 0px 15px;

  .total-price {
    width: 100%;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    background: #292729;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.stylish};
    font-size: 36px;
    font-weight: 400;
    line-height: 45.4px;
    letter-spacing: 2px;
  }
  .panier {
    width: 100%;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background: #f5f5f7;
    box-shadow: 0px 0px 20px 0px #00000033 inset;
    p {
      font-family: ${theme.fonts.family.stylish};
      font-size: 36px;
      font-weight: 400;
      line-height: 72px;
      text-align: center;
    }
  }
  .panier-footer {
    width: 100%;
    padding: 22px 0;
    border-radius: 0px 0px 0px 15px;
    background: #292729;
    color: white;
    font-family: ${theme.fonts.family.stylish};
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
`;
