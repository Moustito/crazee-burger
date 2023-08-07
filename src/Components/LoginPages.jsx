import { useState } from "react";
import LoginForm from "./LoginForm";

function LoginPage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <LoginForm userName={inputValue} setUserName={setInputValue} />
    </>
  );
}

export default LoginPage;
