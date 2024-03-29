import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ className, Icon, onClick, label }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      {Icon && <span>{Icon}</span>}
      {label && <p>{label}</p>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  border: 0;
  background-color: ${theme.colors.white};
  display: flex;
  height: 43px;
  padding: 10px 22px;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0px 0px;
  gap: 13px;
  box-shadow: ${theme.shadows.subtle};
  border: 1px solid ${theme.colors.greyLight};
  border-bottom: 2px solid ${theme.colors.greyLight};

  span {
    color: ${theme.colors.greySemiDark};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    color: ${theme.colors.greySemiDark};
    text-align: center;
    font-family: Open Sans;
    font-size: ${theme.fonts.size.P0};
    border-bottom: 2px solid transparent;
  }

  &:hover {
    border-bottom: 2px solid transparent;
    cursor: pointer;
    p {
      border-bottom: 2px solid ${theme.colors.greySemiDark};
    }
  }
`;
