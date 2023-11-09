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
  display: grid;
  grid-gap: 80px;
  grid-template-columns: repeat(4, 240px);
  justify-content: center;
  width: 100%;
`;
