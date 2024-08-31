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

  const handleAddToBasket = (idProductToAdd) => {
    const menuBasketCopy = deepClone(menuBasket);
    const isProductAlreadyInBasket = findObjectById(
      idProductToAdd,
      menuBasketCopy
    );

    if (isProductAlreadyInBasket) {
      return incrementProductAlreadyInBasket(
        idProductToAdd,
        menuBasketCopy,
        setMenuBasket
      );
    }

    addNewBasketProduct(idProductToAdd, menuBasketCopy, setMenuBasket);
  };

  const incrementProductAlreadyInBasket = (
    idProductToAdd,
    menuBasketCopy,
    setMenuBasket
  ) => {
    const indexOfProductToIncrement = findIndexById(
      idProductToAdd,
      menuBasketCopy
    );
    menuBasketCopy[indexOfProductToIncrement].quantity += 1;
    return setMenuBasket(menuBasketCopy);
  };

  const addNewBasketProduct = (
    idProductToAdd,
    menuBasketCopy,
    setMenuBasket
  ) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 };
    const newMenuBasket = [newBasketProduct, ...menuBasketCopy];
    setMenuBasket(newMenuBasket);
  };

  const handleDeleteToBasket = (productId) => {
    const menuBasketUpdate = removeObjectById(productId, menuBasket);
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
