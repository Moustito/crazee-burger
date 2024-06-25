import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../../theme";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextsConfig } from "./inputTextConfig";

export default function Form({ onSubmit, onChange, isSubmited, product }) {
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
          />
        ))}
        <div className="submit">
          <PrimaryButton
            label={"Ajouter un nouveau produit au menu"}
            className={isSubmited && "activeButton"}
            version="succes"
          />
          {isSubmited && <SubmitMessage />}
        </div>
      </div>
    </FormStyled>
  );
}

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

    .activeButton {
      color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
      background-color: transparent;
    }
  }
`;
