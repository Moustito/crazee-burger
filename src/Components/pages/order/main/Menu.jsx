import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import EmptyMenu from "./EmptyMenu";
import OrderContext from "../../../../context/OrderContext";
import comingSoon from "../../../../assets/images/coming-soon.png";

const DEFAULT_IMAGE = `${comingSoon}`;

export default function Menu() {
  const { menu, handleDelete } = useContext(OrderContext);

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
        <ProductCard
          key={id}
          id={id}
          title={title}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          price={price}
          onDelete={() => handleDelete(id)}
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
