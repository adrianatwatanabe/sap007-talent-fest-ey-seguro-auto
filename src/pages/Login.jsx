import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Form from "../components/Form";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import LinkText from "../components/Link";
import { userLogin } from "../lib/authentication"


function Login() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await userLogin(email, password)
      .then(() => {
        navigate("/history");
      })
  }

  return (
    <Container customClass="centralize">
      <Logo customClass="logoLogin" />
      <Form customClass="formLogin">
        <Input
          type="email"
          placeholder="Email"
          customClass="input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          customClass="input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          children="ENTRAR"
          customClass="button"
          onClick={handleLogin}
        />
        <LinkText href="register" customClass="hiperlink">
          Crie sua conta
        </LinkText>
      </Form>
    </Container>
  );
}
export default Login;
