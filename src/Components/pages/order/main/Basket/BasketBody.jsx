import styled from "styled-components";
import { theme } from "../../../../../theme";
import CardBasket from "../../../../reusable-ui/CardBasket";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function BasketBody() {
  const { menuBasket } = useContext(OrderContext);

  return (
    <BasketBodyStyled>
      {menuBasket === false ? (
        <span className="empty-mesage">Votre commande est vide.</span>
      ) : (
        menuBasket.map(({ id, title, imageSource, price, count }) => {
          return (
            <CardBasket
              key={id}
              title={title}
              imageSource={imageSource}
              price={price}
              count={count}
            />
          );
        })
      )}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.basket};
  padding: 20px 16px;
  overflow: scroll;

  .empty-mesage {
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);
    text-align: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
