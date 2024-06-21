import styled from "styled-components";
import Card from "./Card";
import { useContext } from "react";
import EmptyMenu from "./EmptyMenu";
import OrderContext from "../../../../context/OrderContext";
import comingSoon from "../../../../assets/images/coming-soon.png";
import { checkIfProductIsClicked } from "./helper";

const DEFAULT_IMAGE = `${comingSoon}`;

export default function Menu() {
  const {
    menu,
    handleDelete,
    productSelected,
    setProductSelected,
    isModeAdmin,
  } = useContext(OrderContext);

  const handleClick = (idProductClicked) => {
    if (!isModeAdmin) return;
    const productClikedOn = menu.find(
      (product) => product.id === idProductClicked
    );
    setProductSelected(productClikedOn);
  };

  const handleCardDelete = (event, id) => {
    event.stopPropagation();
    handleDelete(id);
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
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          price={price}
          onDelete={(event) => handleCardDelete(event, id)}
          onClick={() => handleClick(id)}
          isHoverable={isModeAdmin}
          isSelected={checkIfProductIsClicked(id, productSelected.id)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  width: 100%;
  padding: 50px 50px 150px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  justify-items: center;
  overflow-y: scroll;
`;
