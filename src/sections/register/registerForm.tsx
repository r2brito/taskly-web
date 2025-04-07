import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import FormProvider from "../../components/hook-form/FormProvider";
import { PATH_APP, PATH_AUTH } from "../../routes/paths";
import RegisterSchema from "../../validations/register.scheme";

import {
  FormWrapper,
  Title,
  SubmitButton,
  StyledLink,
  Wrapper
} from "./styles";
import RHFTextField from "../../components/hook-form/RHFTextField/RHFTextField";
import { useAuthSignUp } from "../../domain/Auth/useCases/useAuthSignUp";
import { useSnackbar } from "notistack";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { signUp } = useAuthSignUp({
    onSuccess: () => {
      enqueueSnackbar("Cadastro criada com Sucesso!", {
        variant: "success",
        autoHideDuration: 2000
      });
    },
    onError: () => {
      enqueueSnackbar("Erro ao criar Cadastro!", {
        variant: "error",
        autoHideDuration: 2000
      });
    }
  });

  const methods = useForm<RegisterFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema)
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const onSubmit = async (data: RegisterFormInputs) => {
    signUp(data);
    navigate(PATH_APP.general.app);
  };

  return (
    <FormWrapper>
      <Title>Crie sua conta</Title>

      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Wrapper>
          <RHFTextField
            name="name"
            placeholder="Nome"
          />

          <RHFTextField
            name="email"
            placeholder="Email"
          />
          <RHFTextField
            name="password"
            placeholder="Senha"
            type="password"
          />

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
          >
            Cadastrar
          </SubmitButton>
        </Wrapper>
      </FormProvider>

      <StyledLink
        to={PATH_AUTH.login}
        as={RouterLink}
      >
        Faça o seu login
      </StyledLink>
    </FormWrapper>
  );
};

export default RegisterForm;
