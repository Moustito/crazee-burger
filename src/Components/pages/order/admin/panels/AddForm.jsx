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

const EMPTY_PRODUCT = {
  title: "",
  price: 0,
  imageSource: "",
};

export default function AddForm() {
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmited, setIsSubmited] = useState(false);
  const { handleAddProduct } = useContext(OrderContext);

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructuration de l'objet "e.target" pour obtenir name et value
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID,
    };

    handleAddProduct(newProductToAdd);
    // Vide le formulaire
    setNewProduct(EMPTY_PRODUCT);

    displaySuccesMessage();
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="imagePreview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <p>Aucune image</p>
        )}
      </div>
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
        <div className="button-and-SuccesSpan">
          <PrimaryButton
            label={"Ajouter un nouveau produit au menu"}
            className={isSubmited && "activeButton"}
            version="succes"
            type="submit"
          />
          {/* <button className={isSubmited && "activeButton"} type="submit">
            Ajouter un nouveau produit au menu
          </button> */}
          {isSubmited && (
            <span className="succes">
              <FiCheck className="icon" />
              <p>Ajouté avec succès !</p>
            </span>
          )}
        </div>
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: flex;
  padding-top: 30px;
  padding-left: 70px;

  .imagePreview {
    width: 215px;
    height: 120px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${theme.colors.greyLight};
    border-radius: 5px;

    color: ${theme.colors.greySemiDark};
    background-color: ${theme.colors.greyLight};
    font-size: 16px;

    img {
      max-width: 215px;
      max-height: 120px;
    }
  }

  .button-and-SuccesSpan {
    display: flex;

    .activeButton {
      color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
      background-color: transparent;
    }
    .succes {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${theme.colors.success};

      .icon {
        margin-left: 15px;
        margin-right: 5px;

        border: 1px solid ${theme.colors.success};
        border-radius: 50%;
      }
    }
  }
`;
