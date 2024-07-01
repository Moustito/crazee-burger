import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "../../../../reusable-ui/BasketCard";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { DEFAULT_IMAGE } from "../MainRightSide/Menu/Menu";

export default function BasketBody() {
  const { menuBasket, handleBasketDelete } = useContext(OrderContext);

  return (
    <BasketBodyStyled>
      {menuBasket === false ? (
        <span className="empty-mesage">Votre commande est vide.</span>
      ) : (
        [...menuBasket]
          .reverse()
          .map(({ id, title, imageSource, price, count }) => {
            return (
              <BasketCard
                key={id}
                title={title}
                imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
                price={price}
                count={count}
                onDelete={() => handleBasketDelete(id)}
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
