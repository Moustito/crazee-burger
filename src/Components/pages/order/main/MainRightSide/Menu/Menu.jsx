import styled from "styled-components";
import Card from "../../../../../reusable-ui/Card.jsx";
import { useContext } from "react";
import EmptyMenu from "./EmptyMenu";
import OrderContext from "../../../../../../context/OrderContext";
import { checkIfProductIsClicked } from "./helper";
import { IMAGE_COMING_SOON } from "../../../../../../enums/product";

export default function Menu() {
  const {
    menu,
    handleDelete,
    productSelected,
    setProductSelected,
    isModeAdmin,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
    handleBasketDelete,
  } = useContext(OrderContext);

  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");

    const productClikedOn = menu.find(
      (product) => product.id === idProductClicked
    );
    await setProductSelected(productClikedOn);

    titleEditRef.current.focus();
  };

  const handleCardDelete = (event, id) => {
    event.stopPropagation();
    handleDelete(id);
    handleBasketDelete(id);
    id === productSelected.id && setProductSelected(IMAGE_COMING_SOON);
    titleEditRef.current.focus();
  };

  if (menu.length === 0) {
    return (
      <MenuStyled>
        <EmptyMenu />
      </MenuStyled>
    );
  }

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          id={id}
          title={title}
          imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
          price={price}
          onDelete={(event) => handleCardDelete(event, id)}
          onClick={() => handleClick(id)}
          ishoverable={isModeAdmin}
          isselected={checkIfProductIsClicked(id, productSelected.id)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  width: 100%;
  padding: 50px 50px 150px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  justify-items: center;
  overflow-y: scroll;
`;
