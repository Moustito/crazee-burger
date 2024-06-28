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
    //Copie des menus
    const menuCopy = deepClone(menu);
    const menuBasketCopy = deepClone(menuBasket);

    //manipulation de menuCopy
    const ProductForBasket = menuCopy.find(
      (product) => idProductClicked === product.id
    );
    const count = 1;
    const ProductForBasket2 = { count, ...ProductForBasket };
    console.log(ProductForBasket2);

    const menuBasketUpdated = [ProductForBasket2, ...menuBasketCopy];

    //Mise à jour de basketMenu
    setMenuBasket(menuBasketUpdated);
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
