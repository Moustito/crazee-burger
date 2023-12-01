import styled from "styled-components";
import { theme } from "../../theme";

export default function Tabs({ className, Icon, onClick, label }) {
  return (
    <TabsStyled className={className} onClick={onClick}>
      {Icon && <span>{Icon}</span>}
      {label && <p>{label}</p>}
    </TabsStyled>
  );
}

const TabsStyled = styled.div`
  background-color: ${theme.colors.greyLight};
  display: flex;
  height: 43px;
  padding: 10px 22px;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0px 0px;
  gap: 13px;
  box-shadow: 0px -6px 8px -2px ${theme.shadows.subtle};

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
    cursor: pointer;
    p {
      border-bottom: 2px solid ${theme.colors.greySemiDark};
    }
  }
`;
