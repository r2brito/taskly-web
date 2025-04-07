import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import FormProvider from "../../components/hook-form/FormProvider";
import { PATH_AUTH } from "../../routes/paths";
import LoginSchema from "../../validations/login.scheme";
import {
  FormWrapper,
  Title,
  Input,
  SubmitButton,
  LinkWrapper,
  StyledLink,
  Wrapper
} from "./styles";
import RHFTextField from "../../components/hook-form/RHFTextField/RHFTextField";
import { useAuthSignIn } from "../../domain/Auth/useCases/useAuthSignIn";
import { useSnackbar } from "notistack";
import { useAuthCredentials } from "../../services";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { saveCredentials } = useAuthCredentials();

  const { signIn } = useAuthSignIn({
    onSuccess: (authCredentials) => {
      saveCredentials(authCredentials);
      enqueueSnackbar("Login feito com Sucesso!", {
        variant: "success",
        autoHideDuration: 2000
      });
    },
    onError: () => {
      enqueueSnackbar("Erro ao fazer login!", {
        variant: "error",
        autoHideDuration: 2000
      });
    }
  });

  const methods = useForm<LoginFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const onSubmit = async (data: LoginFormInputs) => {
    signIn(data);
  };

  return (
    <FormWrapper>
      <Title>Login</Title>

      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Wrapper>
          <RHFTextField
            name="email"
            placeholder="Digite seu email"
          />

          <RHFTextField
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
          >
            Entrar
          </SubmitButton>
        </Wrapper>
      </FormProvider>

      <LinkWrapper>
        <StyledLink
          to="#"
          as={RouterLink}
        >
          Esqueceu sua senha?
        </StyledLink>
        <StyledLink
          to={PATH_AUTH.register}
          as={RouterLink}
        >
          Crie sua conta
        </StyledLink>
      </LinkWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
