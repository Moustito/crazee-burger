import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";

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
      <div className="input">
        <TextInput
          Icon={<FaHamburger />}
          placeholder={"Nom du produit (ex: Super Burger)"}
          className={"AdminForm"}
          onChange={handleChange}
          value={newProduct.title}
          name={"title"}
        />
        <TextInput
          Icon={<BsFillCameraFill />}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          className={"AdminForm"}
          onChange={handleChange}
          value={newProduct.imageSource}
          name={"imageSource"}
        />
        <TextInput
          Icon={<MdOutlineEuro />}
          placeholder={"Prix"}
          className={"AdminForm"}
          onChange={handleChange}
          value={newProduct.price ? newProduct.price : ""}
          name={"price"}
        />
        <div>
          <button className={isSubmited && "activeButton"} type="submit">
            Ajouter un nouveau produit au menu
          </button>
          {isSubmited && (
            <span>
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

    border: 1px solid #e4e5e9;
    border-radius: 5px;

    color: #93a2b1;
    background-color: #e4e5e9;
    font-size: 16px;

    img {
      max-width: 215px;
      max-height: 120px;
    }
  }

  .input {
    display: flex;
    flex-direction: column;

    margin-left: 20px;

    div {
      height: 35px;
      width: 650px;

      margin: 0;
      margin-bottom: 8px;
      padding: 8px, 16px, 8px, 24px;

      background-color: #f5f5f7;
      color: #747b91;
    }
    .AdminForm {
      margin-left: 10px;
      background-color: transparent;
    }
    div {
      display: flex;

      button {
        width: 285px; // 275px
        height: 35px;
        padding: 10px 30px;

        border: 1px solid #60bd4f;
        border-radius: 5px;

        color: white;
        background-color: #60bd4f;

        &:hover {
          cursor: pointer;
        }
      }
      .activeButton {
        color: #60bd4f;
        background-color: white;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        color: #60bd4f;

        .icon {
          margin-left: 15px;
          margin-right: 5px;

          border: 1px solid #60bd4f;
          border-radius: 50%;
        }
      }
    }
  }
`;
