import styled from "styled-components";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
        <div className="onglet">
            <p>Button</p>
        </div>
      <div className="panel">
        <p>Ajouter un produit</p>
      </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background-color: red;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  
  .onglet {
      height: 43px;
  }
  .panel {
    background-color: purple;
    height: 250px;
    padding-top: 17px;
    padding-left: 21px;
  }
`;
