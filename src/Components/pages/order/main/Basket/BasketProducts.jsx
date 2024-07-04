import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { DEFAULT_IMAGE } from "../MainRightSide/Menu/Menu";
import BasketCard from "../../../../reusable-ui/BasketCard";
import { theme } from "../../../../../theme";

export default function BasketProducts() {
  const { menuBasket, handleBasketDelete, isModeAdmin } =
    useContext(OrderContext);

  return (
    <BasketProductsStyled>
      {[...menuBasket]
        .reverse()
        .map(({ id, title, imageSource, price, quantity }) => {
          return (
            <BasketCard
              key={id}
              title={title}
              imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
              price={price}
              quantity={quantity}
              onDelete={() => handleBasketDelete(id)}
              ishoverable={isModeAdmin}
            />
          );
        })}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.basket};
  padding: 20px 16px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
