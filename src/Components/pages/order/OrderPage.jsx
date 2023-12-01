import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import { theme } from "../../../theme";
import Admin from "./admin/Admin";
import AdminContext from "../../../context/isModeAdminContext";
import { useState } from "react";


export default function OrderPage() {
  const { username } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const adminContextValue = {
    isChecked,
    setIsChecked
  };

  return (
    <OrderPageStyled>
      <AdminContext.Provider value={adminContextValue}>
        <div className="container">
          <Navbar username={username} />
          <Main />
          <Admin />
        </div>
      </AdminContext.Provider>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
