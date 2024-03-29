import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function Menu() {
  const [products, setProducts] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          imageSource={product.imageSource}
          price={product.price}
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
