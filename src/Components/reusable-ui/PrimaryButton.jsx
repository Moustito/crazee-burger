import { styled } from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({label, Icon}) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
    width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: ${theme.colors.primary_burger};
  border: 1px solid ${theme.colors.primary_burger};

  &:hover:not(:disabled) {
    background-color: white;
    color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    transition: all 200ms ease-out;
  }

  &:active {
    color: white;
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
