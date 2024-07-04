import { useState } from "react";
import { deepClone, find } from "../utils/array";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = (menu) => {
  const [menuBasket, setMenuBasket] = useState([]);

  const handleAddToBasket = (idProductClicked) => {
    // Copie du State
    const basketCopy = deepClone(menuBasket);
    const menuCopy = deepClone(menu);

    const isProductAlreadyInBasket =
      find(idProductClicked, basketCopy) !== undefined;

    const productToAdd = find(idProductClicked, menuCopy);

    //Manipulation du State
    //1er cas : Le produit n'est pas déjà dans le basket
    if (!isProductAlreadyInBasket) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      };

      const basketUpdated = [newBasketProduct, ...basketCopy];

      //Update du State
      return setMenuBasket(basketUpdated);
    }

    //2ème cas : le prosuit est déjà dans le basket
    if (isProductAlreadyInBasket) {
      const indexOfProductToIncrement = menuBasket.findIndex(
        (basketProduct) => basketProduct.id === idProductClicked
      );

      basketCopy[indexOfProductToIncrement].quantity += 1;

      //Update du State
      return setMenuBasket(basketCopy);
    }
  };

  const handleDeleteToBasket = (productId) => {
    const menuBasketCopy = deepClone(menuBasket);
    const menuBasketUpdate = menuBasketCopy.filter(
      (product) => productId !== product.id
    );

    setMenuBasket(menuBasketUpdate);
  };

  return {
    menuBasket,
    handleAddToBasket,
    handleDeleteToBasket,
  };
};
