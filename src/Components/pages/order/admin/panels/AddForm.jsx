import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../../theme";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextsConfig } from "./inputTextConfig";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

export default function AddForm() {
  const [isSubmited, setIsSubmited] = useState(false);
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(OrderContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAddProduct(newProductToAdd);
    // Vide le formulaire
    setNewProduct(EMPTY_PRODUCT);

    displaySuccesMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target; // Destructuration de l'objet "e.target" pour obtenir name et value
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const displaySuccesMessage = () => {
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, 2000);
  };

  const inputTexts = getInputTextsConfig(newProduct);

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
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
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
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
