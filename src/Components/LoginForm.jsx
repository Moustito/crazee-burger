export default function LoginForm({ userName, setUserName }) {
  //State

  //Comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${userName}`);
    setUserName("");
  };
  const nameAdd = (event) => {
    setUserName(event.target.value);
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
          value={userName}
        />
        <button>Acceder à votre espace</button>
      </form>
    </>
  );
}
