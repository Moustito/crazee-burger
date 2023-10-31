import LoginForm from "./LoginForm";
import { styled } from "styled-components";
import BurgerBackground from "../../../assets/images/burger-background.jpg";
import Logo from "../../reusable-ui/Logo";

function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo className="logo-login-page" />
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

  .logo-login-page {
    transform: scale(2.5);
  }
`;
