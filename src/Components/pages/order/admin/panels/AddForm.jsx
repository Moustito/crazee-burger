import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../../theme";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";

export const EMPTY_PRODUCT = {
  title: "",
  price: 0,
  imageSource: "",
};

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

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div>
        <TextInput
          Icon={<FaHamburger />}
          placeholder={"Nom du produit (ex: Super Burger)"}
          onChange={handleChange}
          value={newProduct.title}
          name={"title"}
          version="minimalist"
        />
        <TextInput
          Icon={<BsFillCameraFill />}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          onChange={handleChange}
          value={newProduct.imageSource}
          name={"imageSource"}
          version="minimalist"
        />
        <TextInput
          Icon={<MdOutlineEuro />}
          placeholder={"Prix"}
          onChange={handleChange}
          value={newProduct.price ? newProduct.price : ""}
          name={"price"}
          version="minimalist"
        />
        <div className="button-and-succesMessage">
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

  .button-and-succesMessage {
    display: flex;

    .activeButton {
      color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
      background-color: transparent;
    }
  }
`;
