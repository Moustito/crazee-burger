import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const nameAdd = (event) => {
    setInputValue(event.target.value);
  };

  //Affichage (Render)
  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez vous</h2>

      <form action="submit" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Entrez votre prénom..."
          onChange={nameAdd}
          value={inputValue}
        />
        <button>Acceder à votre espace</button>
      </form>
    </>
  );
}
