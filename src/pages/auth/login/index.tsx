import React from "react";

import Page from "../../../components/page";
import LoginForm from "../../../sections/login/loginForm";
import { Wrapper, Card, Container } from "./styles";

const Login: React.FC = () => {
  return (
    <Page title="Login">
      <Wrapper>
        <Container>
          <Card>
            <LoginForm />
          </Card>
        </Container>
      </Wrapper>
    </Page>
  );
};

export default Login;
