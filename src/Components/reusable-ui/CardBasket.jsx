import styled from "styled-components";

export default function CardBasket({ title, imageSource, price }) {
  return (
    <CardBasketStyled>
      <p>{title}</p>
      <p>{imageSource}</p>
      <p>{price}</p>
    </CardBasketStyled>
  );
}

const CardBasketStyled = styled.div``;
