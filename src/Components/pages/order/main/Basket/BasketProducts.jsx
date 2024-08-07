import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import BasketCard from "../../../../reusable-ui/BasketCard";
import { theme } from "../../../../../theme";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";

export default function BasketProducts() {
  const { menuBasket, handleDeleteToBasket, isModeAdmin } =
    useContext(OrderContext);

  const handleBasketCardDelete = (id) => {
    handleDeleteToBasket(id);
  };

  return (
    <BasketProductsStyled>
      {[...menuBasket].map(({ id, title, imageSource, price, quantity }) => {
        return (
          <BasketCard
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            price={price}
            quantity={quantity}
            onDelete={() => handleBasketCardDelete(id)}
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
