import LoginForm from "./LoginForm";
import { styled } from "styled-components";
import BurgerBackground from "../../../assets/images/burger-background.jpg";

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

  background: url(${BurgerBackground}) rgba(0, 0, 0, 0.6) fixed center/cover;
  background-blend-mode: darken;

  .logo {
    background: green;
  }
`;
