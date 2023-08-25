import LoginForm from "./LoginForm";
import { styled } from "styled-components";

function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="logo">Logo Crazee Burger</div>
      <LoginForm />
    </LoginPageStyled>
  );
}

export default LoginPage;

const LoginPageStyled = styled.div`
  background: red;

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    background: green;
  }
`;
