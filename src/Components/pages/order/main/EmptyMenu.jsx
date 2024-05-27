import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { fakeMenu } from "../../../../fakeData/fakeMenu";

export default function EmptyMenu() {
  const { isModeAdmin, setMenu } = useContext(OrderContext);

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

  if (isModeAdmin) {
    return (
      <EmptyMenuStyled>
        <p className="title">Le menu est vide ?</p>
        <p>Cliquez ci-dessous pour le réinitialiser</p>
        <button onClick={resetMenu}>Générer de nouveaux produits</button>
        <PrimaryButton
          label={"Générer de nouveaux produits"}
          onClick={resetMenu}
        />
      </EmptyMenuStyled>
    );
  }
  return (
    <EmptyMenuStyled>
      <p className="title">Victime de notre succès ! :D</p>
      <p>De nouvelles recettes sont en cours de préparation.</p>
      <p>À très vite !</p>
    </EmptyMenuStyled>
  );
}

const EmptyMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
