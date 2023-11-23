import styled from "styled-components";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import ProductCard from "./ProductCard";

export default function Menu() {
  return (
    <MenuStyled>
      {fakeMenu2.map((Menu) => (
        <ProductCard key={Menu.id} datas={Menu} />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  width: 100%;
  padding: 50px 50px 150px;
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  justify-items: center;
`;
