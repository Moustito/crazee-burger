import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { getTabsConfig, getTabSelected } from "./tabsConfig";
import { theme } from "../../../../theme";
import { EMPTY_PRODUCT } from "../../../../enums/product";

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useContext(OrderContext);

  const productAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT;
  const tabs = getTabsConfig(productAlreadyBeenClicked);

  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 240px;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box;
`;
