import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";

export default function Total({ amountToPay }) {
  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amout">{amountToPay}</span>
      </TotalStyled>
    </Header>
  );
}

const TotalStyled = styled.div`
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${theme.colors.primary};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
