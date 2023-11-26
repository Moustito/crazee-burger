import styled from "styled-components";

export default function AdminPanelTabs({ Icon, onClick, label }) {
  return (
    <AdminPanelTabsStyled onClick={onClick}>
      {Icon && <span>{Icon}</span>}
      {label && <p>{label}</p>}
    </AdminPanelTabsStyled>
  );
}

const AdminPanelTabsStyled = styled.div`
  background-color: #e4e5e9;
  display: flex;
  height: 43px;
  padding: 10px 22px;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0px 0px;
  gap: 13px;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);

  span {
    color: #93a2b1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    color: #93a2b1;
    text-align: center;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 2px solid transparent;
  }

  &:hover {
    cursor: pointer;
    p {
      border-bottom: 2px solid #93a2b1;
    }
  }
`;
