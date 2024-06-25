import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EditMessage() {
  return (
    <EditMessageStyled>
      Cliquer sur un produit du menu pour le modifier{" "}
      <span className="live-update">en temps réel</span>
    </EditMessageStyled>
  );
}

const EditMessageStyled = styled.span`
  margin-top: 6px;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};
  .live-update {
    text-decoration: underline;
  }
`;
