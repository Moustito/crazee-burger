import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext";
import { useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { deepClone } from "../../../utils/array";

export default function OrderPage() {
  const { username } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, handleAddProduct, handleDelete, handleEdit, resetMenu } =
    useMenu();

  const [menuBasket, setMenuBasket] = useState([]);
  const addToBasket = (idProductClicked) => {
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

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAddProduct,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    addToBasket,
    menuBasket,
    handleBasketDelete,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
