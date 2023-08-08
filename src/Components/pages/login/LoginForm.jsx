import { useState } from "react";

export default function LoginForm() {
  //State
  const [inputValue, setInputValue] = useState("");

  //Comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
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
