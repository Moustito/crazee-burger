import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext";
import { useState } from "react";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepClone } from "../../../utils/array";

export default function OrderPage() {
  const { username } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  const handleAddProduct = (newProduct) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
  };

  const handleDelete = (productId) => {
    const menuCopy = JSON.parse(JSON.stringify(menu));
    const menuUpdate = menuCopy.filter((product) => productId !== product.id);
    setMenu(menuUpdate);
  };

  const handleEdit = (productBeingEdited) => {
    // Deep Clone
    const menuCopy = JSON.parse(JSON.stringify(menu));

    // Manip sur le State
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    );

    menuCopy[indexOfProductToEdit] = productBeingEdited;

    // Update du State
    setMenu(menuCopy);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAddProduct,
    handleDelete,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
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
