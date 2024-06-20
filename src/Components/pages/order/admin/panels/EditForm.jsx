import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import HintMessage from "./HintMessage";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

export default function EditForm() {
  const { productSelected } = useContext(OrderContext);
  const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT);

  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductBeingEdited({
      ...productBeingEdited,
      [name]: value,
    });
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
