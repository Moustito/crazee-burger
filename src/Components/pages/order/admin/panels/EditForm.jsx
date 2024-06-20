import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import HintMessage from "./HintMessage";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit } =
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
      <div className="InputFields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
  display: flex;
  padding-top: 30px;
  padding-left: 70px;
`;
