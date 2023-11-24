import { styled } from "styled-components";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";
import { useState } from "react";

export default function NavbarRightSide({ username }) {

    const [isChecked, setIsChecked] = useState(false);

    function handleToggle() {
      if (isChecked) {
        console.log("isChecked false");
        return setIsChecked(false);
      }
      console.log("isChecked true");
      return setIsChecked(true);
    }


  return (
    <NavbarRightSideStyled>
      <ToggleButton isChecked={isChecked} onToggle={() => handleToggle()} labelIfChecked="Désactiver le mode admin" labelIfUnchecked="Activer le mode admin"/>
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
