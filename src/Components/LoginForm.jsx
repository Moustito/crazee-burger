export default function LoginForm({ userName, setUserName }) {
  const nameSubmit = (event) => {
    event.preventDefault();
    setUserName("");
  };
  const nameAdd = (event) => {
    setUserName(event.target.value);
  };
  const nameUser = () => {
    if (userName !== "") {
      alert("Bonjour " + userName);
    }
  };

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <h3>Connectez vous</h3>

      <form action="submit" onSubmit={nameSubmit}>
        <input
          required
          type="text"
          placeholder="Entrez votre prénom..."
          onChange={nameAdd}
          value={userName}
        />
        <button onClick={nameUser}>Acceder à votre espace</button>
      </form>
    </>
  );
}
