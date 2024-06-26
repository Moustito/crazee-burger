import { useState } from "react";
import { deepClone } from "../utils/array";
import { fakeMenu } from "../fakeData/fakeMenu";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleAddProduct = (newProduct) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
  };

  const handleDelete = (productId) => {
    const menuCopy = deepClone(menu);
    const menuUpdate = menuCopy.filter((product) => productId !== product.id);
    setMenu(menuUpdate);
  };

  const handleEdit = (productBeingEdited) => {
    // Deep Clone
    const menuCopy = deepClone(menu);

    // Manip sur le State
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    );

    menuCopy[indexOfProductToEdit] = productBeingEdited;

    // Update du State
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.LARGE);
  };

  return {
    menu,
    handleAddProduct,
    handleDelete,
    handleEdit,
    resetMenu,
  };
};
