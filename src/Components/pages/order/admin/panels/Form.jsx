import React from "react";
import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput";
import { theme } from "../../../../../theme";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";

const Form = React.forwardRef(
  ({ onSubmit, onChange, product, children }, ref) => {
    const inputTexts = getInputTextsConfig(product);

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <TextInput
              {...input}
              key={input.id}
              onChange={onChange}
              version="minimalist"
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
          <div className="submit">{children}</div>
        </div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
  display: flex;
  padding-top: 30px;
  padding-left: 70px;
  gap: 20px;

  .input-fields {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .submit {
    display: flex;
  }
`;
