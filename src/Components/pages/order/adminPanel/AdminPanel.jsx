import styled from "styled-components";
import AdminPanelTabs from "../../../reusable-ui/AdminPanelTabs";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { useContext, useState } from "react";
import AdminContext from "../../../../context/isModeAdminContext";

export default function AdminPanel() {
  const { isChecked } = useContext(AdminContext);
  const displayValue = isChecked ? "block" : "none";

  const [displayPanel, setDisplayPanel] = useState(true);
  const displayPanelValue = displayPanel ? "block" : "none";

  function handleDisplayPanel() {
    setDisplayPanel(!displayPanel);
  }

  return (
    <AdminPanelStyled style={{ display: displayValue }}>
      <div className="tabs">
        <AdminPanelTabs
          Icon={displayPanel ? <FiChevronDown /> : <FiChevronUp />}
          onClick={() => handleDisplayPanel()}
        />
        <AdminPanelTabs 
            Icon={<AiOutlinePlus />} 
            label={"Ajouter un produit"} 
        />
        <AdminPanelTabs
          Icon={<MdModeEditOutline />}
          label={"Modifier un produit"}
        />
      </div>
      <div className="panel" style={{ display: displayPanelValue }}>
        <p>Ajouter un produit</p>
      </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  .tabs {
    height: 43px;
    display: flex;
    gap: 1px;
    margin-left: 70px;
  }
  .panel {
    background-color: purple;
    height: 250px;
    padding-top: 17px;
    padding-left: 21px;
  }
`;
