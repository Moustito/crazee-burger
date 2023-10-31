import styled from "styled-components";

export default function ProductCard({ className, datas }) {
  return (
    <ProductCardStyled className={className}>
      <img src={datas.imageSource} alt="" />
      <div className="card-menu-content">
        <h3>{datas.title}</h3>
        <div>
          <p>{datas.price}</p>
          <button>Ajouter</button>
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
  margin-top: 50px;
  padding: 50px 20px 25px 20px;

  img {
    width: 200px;
  }

  .card-menu-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;
    h3 {
      color: #17161a;
      font-family: Amatic SC;
      font-size: 36px;
      font-weight: 700;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        color: #ffa01b;
        font-family: Open Sans;
        font-size: 16px;
        font-weight: 400;
      }
      button {
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
