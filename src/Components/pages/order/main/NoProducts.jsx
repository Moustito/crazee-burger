import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function NoProducts() {
  const { isModeAdmin } = useContext(OrderContext);

  if (isModeAdmin) {
    return (
      <NoProductsStyled>
        <p className="title">Le menu est vide ?</p>
        <p>Cliquez ci-dessous pour le réinitialiser</p>
        <PrimaryButton label={"Générer de nouveaux produits"} />
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

const NoProductsStyled = styled.div``;
