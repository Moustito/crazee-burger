import { useState } from "react";
import {
  deepClone,
  removeObjectById,
  findObjectById,
  findIndexById,
} from "../utils/array";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = (menu) => {
  const [menuBasket, setMenuBasket] = useState([]);

  const handleAddToBasket = (idProductClicked) => {
    const basketCopy = deepClone(menuBasket);
    const menuCopy = deepClone(menu);

    const isProductAlreadyInBasket =
      findObjectById(idProductClicked, basketCopy) !== undefined;
    const productToAdd = findObjectById(idProductClicked, menuCopy);

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
    const indexOfProductToIncrement = findIndexById(
      idProductClicked,
      basketCopy
    );
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
    const menuBasketUpdate = removeObjectById(productId, menuBasketCopy);

    setMenuBasket(menuBasketUpdate);
  };

  const handleEditToBasket = (productBeingEdited) => {
    // Deep Clone
    const basketCopy = deepClone(menuBasket);

    // Manip sur le State
    const indexOfProductToEdit = menuBasket.findIndexById(
      (basketProduct) => basketProduct.id === productBeingEdited.id
    );

    basketCopy[indexOfProductToEdit] = productBeingEdited;

    // Update du State
    setMenuBasket(basketCopy);
  };

  return {
    menuBasket,
    handleAddToBasket,
    handleDeleteToBasket,
    handleEditToBasket,
  };
};
