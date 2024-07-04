import { useState } from "react";
import { deepClone, find, findIndex } from "../utils/array";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = (menu) => {
  const [menuBasket, setMenuBasket] = useState([]);

  const handleAddToBasket = (idProductClicked) => {
    const basketCopy = deepClone(menuBasket);
    const menuCopy = deepClone(menu);

    const isProductAlreadyInBasket =
      find(idProductClicked, basketCopy) !== undefined;
    const productToAdd = find(idProductClicked, menuCopy);

    //1er cas : Le produit n'est pas déjà dans le basket
    if (!isProductAlreadyInBasket) {
      return addNewProductInBasket(productToAdd, basketCopy, setMenuBasket);
    }

    //2ème cas : le prosuit est déjà dans le basket
    return incrementProductAlreadyInBasket(
      idProductClicked,
      basketCopy,
      setMenuBasket
    );
  };

  const incrementProductAlreadyInBasket = (
    idProductClicked,
    basketCopy,
    setMenuBasket
  ) => {
    const indexOfProductToIncrement = findIndex(idProductClicked, basketCopy);
    basketCopy[indexOfProductToIncrement].quantity += 1;
    return setMenuBasket(basketCopy);
  };

  const addNewProductInBasket = (productToAdd, basketCopy, setMenuBasket) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    };
    const basketUpdated = [newBasketProduct, ...basketCopy];
    return setMenuBasket(basketUpdated);
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
