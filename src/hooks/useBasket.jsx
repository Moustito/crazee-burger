import { useState } from "react";
import { deepClone } from "../utils/array";

export const useBasket = (menu) => {
  const [menuBasket, setMenuBasket] = useState([]);

  const handleBasketAddProduct = (idProductClicked) => {
    // Copie des menus
    const menuCopy = deepClone(menu);
    const menuBasketCopy = deepClone(menuBasket);

    // Manipulation de menuCopy
    const ProductForBasket = menuCopy.find(
      (product) => idProductClicked === product.id
    );

    // Ajoute la variable count à mon objet
    const ProductForBasketWithCount = { count: 1, ...ProductForBasket };

    // Check si l'objet est déjà présent dans le basket et l'incrémente si c'est le cas
    const productIndex = menuBasketCopy.findIndex(
      (product) => product.id === idProductClicked
    );

    if (productIndex !== -1) {
      // Si le produit existe déjà dans le panier, incrémenter le compteur
      menuBasketCopy[productIndex].count += 1;
    } else {
      // Si le produit n'existe pas, ajouter le produit avec count initialisé à 1
      menuBasketCopy.push(ProductForBasketWithCount);
    }

    // Mise à jour de BasketMenu
    setMenuBasket(menuBasketCopy);
  };

  const handleBasketDelete = (productId) => {
    const menuBasketCopy = deepClone(menuBasket);
    const menuBasketUpdate = menuBasketCopy.filter(
      (product) => productId !== product.id
    );
    setMenuBasket(menuBasketUpdate);
  };

  return {
    menuBasket,
    handleBasketAddProduct,
    handleBasketDelete,
  };
};
