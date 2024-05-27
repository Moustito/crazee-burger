import { theme } from "../../theme";
import { styled } from "styled-components";

export default function TextInput({ onChange, value, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && <div className="icon">{Icon}</div>}
      <input onChange={onChange} value={value} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0; // must be handle in Parent
  /* white-space: nowrap; */

  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
    display: flex;
    align-items: center;
    /* min-width: 1em; // that way, the icon size is NOT affected by width of the entire component. */
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    width: 100%;
    /* display: flex; */

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
