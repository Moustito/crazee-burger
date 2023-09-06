import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme/index";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

export default function LoginForm() {
  //State
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  //Comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //Affichage (Render)
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div>
        <TextInput
          onChange={handleChange}
          value={inputValue}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle className="icon" />}
        />
        <button>
          <span>Accéder à mon espace</span>
          <IoChevronForward className="icon" />
        </button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-height: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  font-family: "Amatic SC", cursive;

  h1 {
    font-size: 48px;
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
  }
  hr {
    border: 1.5px solid ${theme.colors.primary_burger};
    margin-top: 30px;
    margin-bottom: 40px;
  }
  h2 {
    color: ${theme.colors.white};
    font-weight: ${theme.weights.bold};
    margin: 20px 10px 10px;
    font-size: 36px;
  }

  button {
    width: 100%;
    height: 53px;
    border-radius: 5px;
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary_burger};
    }
    &:active {
      cursor: pointer;
      background-color: ${theme.colors.primary_burger};
      color: ${theme.colors.white};
    }
  }
`;
