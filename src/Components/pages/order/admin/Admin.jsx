import styled from "styled-components";
import Tabs from "../../../reusable-ui/Tabs";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { useContext, useState } from "react";
import AdminContext from "../../../../context/isModeAdminContext";

export default function Admin() {
  const { isChecked } = useContext(AdminContext);
  const displayValue = isChecked ? "block" : "none";

  const [displayPanel, setDisplayPanel] = useState(true);
  const displayPanelValue = displayPanel ? "block" : "none";

  const [showTabs, setShowTabs] = useState("Ajouter un produit");

  function handleDisplayPanel() {
    setDisplayPanel(!displayPanel);
  }

  function handleClickShowTabs(value) {
    setShowTabs(value);
    if (displayPanel === false) {
      setDisplayPanel(true);
    }
  }

  return (
    <AdminStyled style={{ display: displayValue }}>
      <div className="tabs">
        <Tabs
          className={displayPanel ? "" : "showTabsStyle"}
          Icon={displayPanel ? <FiChevronDown /> : <FiChevronUp />}
          onClick={() => handleDisplayPanel()}
        />
        <Tabs
          className={showTabs === "Ajouter un produit" && "showTabsStyle"}
          Icon={<AiOutlinePlus />}
          label={"Ajouter un produit"}
          onClick={() => handleClickShowTabs("Ajouter un produit")}
        />
        <Tabs
          className={showTabs === "Modifier un produit" && "showTabsStyle"}
          Icon={<MdModeEditOutline />}
          label={"Modifier un produit"}
          onClick={() => handleClickShowTabs("Modifier un produit")}
        />
      </div>
      <div className="adminPanel" style={{ display: displayPanelValue }}>
        {showTabs === "Ajouter un produit" && <p>Ajouter un produit</p>}
        {showTabs === "Modifier un produit" && <p>Modifier un produit</p>}
      </div>
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  .tabs {
    height: 43px;
    display: flex;
    gap: 1px;
    margin-left: 70px;

    .showTabsStyle {
      border-radius: 5px 5px 0px 0px;
      border-top: 1px solid #292729;
      border-right: 1px solid #292729;
      border-bottom: 2px solid #292729;
      border-left: 1px solid #292729;
      background: #292729;
      box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
    }
  }
  .adminPanel {
    border-top: 1px solid #e4e5e9;
    background: #fff;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
    height: 250px;
    padding-top: 17px;
    padding-left: 21px;

    p {
      color: #000;
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
