import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { formatPrice } from "../../utils/maths";
import { MdDeleteForever } from "react-icons/md";

export default function BasketCard({
  title,
  imageSource,
  price,
  quantity,
  onDelete,
  ishoverable,
}) {
  return (
    <BasketCardStyled ishoverable={ishoverable}>
      {/* <ImagePreview imageSource={imageSource} title={title} /> */}
      <img src={imageSource} alt={title} />
      <div className="text-content">
        <h5 className="title">{title}</h5>
        <p>{formatPrice(price)}</p>
      </div>
      <div>
        <p className="quantity">x {quantity}</p>
      </div>
      <div className="button-delete" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  ${({ ishoverable }) => ishoverable && ishoverableStyle}

  height: 86px;
  position: relative;
  overflow: hidden;

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

  .title {
    height: 32px;

    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P3};
    font-weight: ${theme.fonts.weights.bold};
    line-height: 32px;
    color: ${theme.colors.dark};

    width: 120px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    font-family: Open Sans;
    font-size: ${theme.fonts.size.SM};
    line-height: 20.43px;
    color: ${theme.colors.primary};
  }
  .quantity {
    display: block;
  }
  .button-delete {
    display: none;
  }
`;

const ishoverableStyle = css`
  &:hover {
    .button-delete {
      width: 76px;
      height: 100%;

      position: absolute;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${theme.colors.red};

      &:hover {
        cursor: pointer;
        .icon {
          color: ${theme.colors.dark};
        }
      }
      &:active {
        .icon {
          color: ${theme.colors.white};
        }
      }
      .icon {
        width: 24px;
        height: 24px;
        color: ${theme.colors.white};
      }
    }
  }
`;
