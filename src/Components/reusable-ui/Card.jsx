import styled, { css } from "styled-components";
import { formatPrice } from "../../utils/maths";
import PrimaryButton from "./PrimaryButton.jsx";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import OrderContext from "../../context/OrderContext";

export default function Card({
  className,
  imageSource,
  title,
  price,
  onDelete,
  onClick,
  ishoverable,
  isselected,
  id,
}) {
  const { isModeAdmin, handleAddProduct, addToBasket } =
    useContext(OrderContext);

  const handleButtonClick = (event, idProductClicked) => {
    event.stopPropagation();
    addToBasket(idProductClicked);
  };

  return (
    <CardStyled
      className={className}
      onClick={onClick}
      ishoverable={ishoverable}
      isselected={isselected}
    >
      <div className="card">
        {isModeAdmin && <TiDelete className="icon" onClick={onDelete} />}
        <img src={imageSource} alt={title} />
        <div className="info-text">
          <h3 className="title">{title}</h3>
          <div className="description">
            <p className="price">{formatPrice(price)}</p>
            <PrimaryButton
              label={"Ajouter"}
              className={"add-button"}
              onClick={(event) => handleButtonClick(event, id)}
            />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${({ isHoverable }) => isHoverable && isHoverableStyle}

  height: 330px;

  .card {
    display: flex;
    position: relative;
    flex-direction: column;

    background: ${theme.colors.white};
    border: 1px solid transparent;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.medium};

    box-sizing: border-box;
    width: 240px;
    height: 330px;
    padding: 50px 20px 25px 20px;

    .icon {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 30px;
      height: 30px;

      color: ${theme.colors.primary};

      &:hover {
        cursor: pointer;
        color: ${theme.colors.red};
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
        font-family: ${theme.fonts.family.stylish};
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

    ${({ isHoverable, isSelected }) =>
      isHoverable && isSelected && isSelectedStyle}
  }
`;

const isHoverableStyle = css`
  .card:hover {
    cursor: pointer;

    box-shadow: ${theme.shadows.orangeHighlight};

    transform: scale(1.05);
    transition: ease-out 0.4s;
  }
`;

const isSelectedStyle = css`
  background-color: ${theme.colors.primary};

  .icon {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }

  .info-text {
    .description {
      .price {
        color: ${theme.colors.white};
      }
    }
  }

  .add-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }
    &.with-focus {
      border: 1px solid ${theme.colors.white};
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      &:active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }
`;
