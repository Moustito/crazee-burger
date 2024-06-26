import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import styled from "styled-components";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { fakeMenu } from "../../../../../../fakeData/fakeMenu";

export default function NoProducts() {
  const { isModeAdmin, setMenu } = useContext(OrderContext);

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

  if (isModeAdmin) {
    return (
      <NoProductsStyled>
        <p className="title">Le menu est vide ?</p>
        <p>Cliquez ci-dessous pour le réinitialiser</p>
        <PrimaryButton
          label={"Générer de nouveaux produits"}
          onClick={resetMenu}
        />
      </NoProductsStyled>
    );
  }
  return (
    <NoProductsStyled>
      <p className="title">Victime de notre succès ! :D</p>
      <p>De nouvelles recettes sont en cours de préparation.</p>
      <p>À très vite !</p>
    </NoProductsStyled>
  );
}

const NoProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1 2 2 -3;

  grid-column: 2 / 2;

  p {
    font-family: Amatic SC;
    font-size: 36px;
    font-weight: 400;
    line-height: 45.4px;
    text-align: center;
  }

  .title {
    font-weight: 700;
  }

  button {
    margin-top: 30px;
  }
`;
