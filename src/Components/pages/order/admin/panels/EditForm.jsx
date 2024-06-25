import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import HintMessage from "./HintMessage";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import { theme } from "../../../../../theme";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  };

  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
            ref={input.name === "title" ? titleEditRef : null}
          />
        ))}
        <div className="submit">
          <span className="sentence">
            Cliquer sur un produit du menu pour le modifier{" "}
            <span className="live-update">en temps réel</span>
          </span>
        </div>
      </div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
  display: flex;
  gap: 20px;
  padding-top: 30px;
  padding-left: 70px;

  .input-fields {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .submit {
      .sentence {
        margin-top: 6px;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.SM};
        .live-update {
          text-decoration: underline;
        }
      }
    }
  }
`;
