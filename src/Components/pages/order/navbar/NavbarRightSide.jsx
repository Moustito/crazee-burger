import { styled } from "styled-components";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavbarRightSide({ username }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggle() {
    if (isChecked) {
      return setIsChecked(false);
    }
    toast.info("Mode admin activé", {
      // icon: <FaUserSecret size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return setIsChecked(true);
  }

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isChecked}
        onToggle={() => handleToggle()}
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
      />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
