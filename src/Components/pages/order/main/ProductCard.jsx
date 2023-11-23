import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths";

export default function ProductCard({ className, imageSource, title, price }) {
  return (
    <ProductCardStyled className={className}>
      <img src={imageSource} alt={title} />
      <div className="info-text">
        <h3 className="title">{title}</h3>
        <div className="description">
          <p className="price">{formatPrice(price)}</p>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductCardStyled>
  );
}

const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background: #fff;
  box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);
  width: 240px;
  height: 330px;
  padding: 50px 20px 25px 20px;

  img {
    width: 200px;
    height: 145px;
    object-fit: contain;
  }

  .info-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;

    .title {
      color: #17161a;
      font-family: Amatic SC;
      font-size: 36px;
      font-weight: 700;
    }

    .description {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        color: #ffa01b;
        font-family: Open Sans;
        font-size: 16px;
        font-weight: 400;
      }

      .add-button {
        border-radius: 5px;
        border: 1px solid #ff9f1b;
        background: #ff9f1b;
        width: 95px;
        height: 38px;

        color: #fff;
        text-align: center;
        font-family: Arial;
        font-size: 11px;
        font-weight: 700;

        &:hover {
          cursor: pointer;
          background: #fff;
          color: #ff9f1b;
        }
        &:active {
          background: #ff9f1b;
          color: #fff;
        }
      }
    }
  }
`;
