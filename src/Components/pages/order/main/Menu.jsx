import styled from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import ProductCard from "./ProductCard";
import { useState } from "react";
import NoProducts from "./NoProducts";

export default function Menu() {
  const [products, setProducts] = useState(fakeMenu.SMALL);

  function HandleDelete(id) {
    const productsCopy = [...products];
    const productsFiltre = productsCopy.filter(
      (productsList) => id !== productsList.id
    );
    setProducts((fakeMenu.SMALL = productsFiltre));
    console.log(products);
  }

  if (products.length === 0) {
    return (
      <MenuStyled>
        <NoProducts />
      </MenuStyled>
    );
  }
  return (
    <MenuStyled>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          imageSource={product.imageSource}
          price={product.price}
          HandleDelete={HandleDelete}
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
