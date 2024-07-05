import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import BasketCard from "../../../../reusable-ui/BasketCard";
import { theme } from "../../../../../theme";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";

export default function BasketProducts() {
  const {
    menuBasket,
    handleDeleteToBasket,
    isModeAdmin,
    productSelected,
    menu,
    setProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
  } = useContext(OrderContext);

  const handleBasketCardDelete = (id) => {
    handleDeleteToBasket(id);
  };

  const checkIfProductIsClicked = (idProductInMenu, idProductClikedOn) => {
    return idProductInMenu === idProductClikedOn;
  };

  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");

    const productClikedOn = menu.find(
      (product) => product.id === idProductClicked
    );
    await setProductSelected(productClikedOn);
    console.log(productClikedOn);

    titleEditRef.current.focus();
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
            onClick={() => handleClick(id)}
            isClickable={isModeAdmin}
            isselected={checkIfProductIsClicked(id, productSelected.id)}
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
