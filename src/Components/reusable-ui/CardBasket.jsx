import styled from "styled-components";
import { theme } from "../../theme";
import { formatPrice } from "../../utils/maths";

export default function CardBasket({ title, imageSource, price, count }) {

  return (
    <CardBasketStyled>
      {/* <ImagePreview imageSource={imageSource} title={title} /> */}
      <img src={imageSource} alt={title} />
      <div className="text-content">
        <h5>{title}</h5>
        <p>{formatPrice(price)}</p>
      </div>
      <div>
        <p>{count}</p>
      </div>
    </CardBasketStyled>
  );
}

const CardBasketStyled = styled.div`
  height: 86px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 20px;

  border-radius: 5px;
  box-shadow: -4px 4px 15px 0px #00000033;
  background-color: ${theme.colors.white};

  img {
    height: 70px;
    width: 85px;
    object-fit: contain;
  }

  h5 {
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P3};
    font-weight: ${theme.fonts.weights.bold};
    line-height: 32px;
    color: ${theme.colors.dark};
  }
  p {
    font-family: Open Sans;
    font-size: ${theme.fonts.size.SM};
    line-height: 20.43px;
    color: ${theme.colors.primary};
  }
`;
