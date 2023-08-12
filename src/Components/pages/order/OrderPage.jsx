import { Link } from "react-router-dom";

export default function OrderPage() {
  return (
    <>
      <h1>OrderPage</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </>
  );
}
