import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../theme";
import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function ProductCard({
  className,
  imageSource,
  title,
  price,
  id,
  handleDelete,
}) {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <ProductCardStyled className={className}>
      {isModeAdmin && (
        <TiDelete className="icon" onClick={() => handleDelete(id)} />
      )}
      <img src={imageSource} alt={title} />
      <div className="info-text">
        <h3 className="title">{title}</h3>
        <div className="description">
          <p className="price">{formatPrice(price)}</p>
          <PrimaryButton label={"Ajouter"} className={"add-button"} />
        </div>
      </div>
    </ProductCardStyled>
  );
}

const ProductCardStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.medium};
  width: 240px;
  height: 330px;
  padding: 50px 20px 25px 20px;

  .icon {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;

    color: #ffa01b;

    &:hover {
      cursor: pointer;
      color: #e25549;
    }
  }

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
      color: ${theme.colors.dark};
      font-family: "Amatic SC", cursive;
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: auto 0;
    }

    .description {
      display: flex;
      justify-content: space-between;

      .price {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: ${theme.colors.primary};
        font-family: Open Sans;
        font-size: 16px;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .add-button {
        width: 95px;
        font-size: ${theme.fonts.size.XS};
        cursor: pointer;
        padding: 12px;
      }
    }
  }
`;
