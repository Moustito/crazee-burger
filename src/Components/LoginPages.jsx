import { useState } from "react";
import LoginForm from "./LoginForm";

function LoginPage() {
  const [userName, setUserName] = useState("");

  return (
    <>
      <LoginForm userName={userName} setUserName={setUserName} />
    </>
  );
}

export default LoginPage;
