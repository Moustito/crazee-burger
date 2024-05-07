import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { useEffect, useState } from "react";
import { fakeMenu } from "../../../../../fakeData/fakeMenu";
import comingSoon from "../../../../../assets/images/coming-soon.png";

export default function AddForm() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    imageSource: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (loading) {
      timeoutId = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [loading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function AddProductCard(e) {
    e.preventDefault();
    setLoading(true);

    if (formData.imageSource === "") {
      formData.imageSource = `${comingSoon}`;
    }

    const newProduct = {
      id: Math.random(),
      ...formData,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    };

    fakeMenu.SMALL.push(newProduct);

    setFormData({
      title: "",
      price: "",
      imageSource: "",
    });
  }

  return (
    <AddFormStyled>
      <div className="picture">
        {formData.imageSource ? (
          <img src={formData.imageSource} alt={formData.title} />
        ) : (
          <p>Aucune image</p>
        )}
      </div>
      <form onSubmit={AddProductCard}>
        <TextInput
          Icon={<FaHamburger />}
          placeholder={"Nom du produit (ex: Super Burger)"}
          className={"AdminForm"}
          onChange={handleChange}
          value={formData.title}
          name={"title"}
        />
        <TextInput
          Icon={<BsFillCameraFill />}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          className={"AdminForm"}
          onChange={handleChange}
          value={formData.imageSource}
          name={"imageSource"}
        />
        <TextInput
          Icon={<MdOutlineEuro />}
          placeholder={"Prix"}
          className={"AdminForm"}
          onChange={handleChange}
          value={formData.price}
          name={"price"}
        />
        <div>
          <button className={loading && "activeButton"} type="submit">
            Ajouter un nouveau produit au menu
          </button>
          {loading && (
            <span>
              <FiCheck className="icon" />
              <p>Ajouté avec succès !</p>
            </span>
          )}
        </div>
      </form>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.div`
  display: flex;
  padding-top: 30px;
  padding-left: 70px;

  .picture {
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

  form {
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
