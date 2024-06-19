import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled className="succesMessage">
      <FiCheck className="icon" />
      <span>Ajouté avec succès !</span>
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.success};

  .icon {
    margin-left: 15px;
    margin-right: 5px;

    border: 1px solid ${theme.colors.success};
    border-radius: 50%;
  }
`;
