import React from "react";

import Page from "../../../components/page";
import RegisterForm from "../../../sections/register/registerForm";
import { Wrapper, Container, Card } from "./styles";

const Register: React.FC = () => {
  return (
    <Page title="Crie sua conta">
      <Wrapper>
        <Container>
          <Card>
            <RegisterForm />
          </Card>
        </Container>
      </Wrapper>
    </Page>
  );
};

export default Register;
