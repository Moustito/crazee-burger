import { theme } from "../../theme";
import { styled } from "styled-components";

export default function TextInput({onChange, value, Icon, ...extraProps}) {
  return (
    <TextInputStyled>
          {Icon && Icon}
          <input
            onChange={onChange}
            value={value}
            type="text"
            {...extraProps}
          />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
    background-color: ${theme.colors.white};
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    
    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: ${theme.colors.greySemiDark};
    }
    
    input {
      border: none;
      font-size: 15px;
      color: ${theme.colors.dark};
      width: 100%;
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }
`;