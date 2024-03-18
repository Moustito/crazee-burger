import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput";
import { FaHamburger, FaNapster } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export default function AddForm() {
  function AddProductCard(event) {
    event.preventDefault();
    alert("AddProductCard");
  }

  return (
    <AddFormStyled>
      <div className="picture">Aucune image</div>
      <form action="">
        <TextInput
          Icon={<FaHamburger />}
          placeholder={"Nom du produit (ex: Super Burger)"}
          className={"AdminForm"}
        />
        <TextInput
          Icon={<BsFillCameraFill />}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          className={"AdminForm"}
        />
        <TextInput
          Icon={<MdOutlineEuro />}
          placeholder={"Prix"}
          className={"AdminForm"}
        />
        <button onClick={(event) => AddProductCard(event)}>
          Ajouter un nouveau produit au menu
        </button>
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

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #e4e5e9;
    border-radius: 5px;

    color: #93a2b1;
    background-color: #e4e5e9;
    font-size: 16px;
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
  }
`;
