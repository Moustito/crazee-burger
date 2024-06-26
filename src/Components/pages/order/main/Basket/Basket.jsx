import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";

export default function Basket() {
  const testProduct = false;

  return (
    <BasketStyled>
      <Header>
        <p>Total</p>
        <p>0.00€</p>
      </Header>
      <div className="panier">
        {testProduct ? <p>Vos produits...</p> : <p>Votre commande est vide.</p>}
      </div>

      <Header>
        <p>Codé avec ❤️ et React.JS</p>
      </Header>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.white};
  height: calc(95vh - 10vh);

  border-radius: 0px 0px 0px ${theme.borderRadius.extraRound};

  width: 350px;

  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px #00000033 inset;

  p {
    padding: 12px 16px;

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
  /* .panier-footer {
    width: 100%;
    padding: 22px 0;
    border-radius: 0px 0px 0px 15px;
    background: #292729;
    color: white;
    font-family: ${theme.fonts.family.stylish};
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  } */
`;
