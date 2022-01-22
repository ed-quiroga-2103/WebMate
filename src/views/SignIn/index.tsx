import logo from "./mathLogo.png";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Logo,
  Text,
} from "./SignInElements";
import ScrollToTop from "../ScrollToTop";

const SignIn = () => {
  return (
    <>
      <ScrollToTop />
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="/home">
              <Logo src={logo} />
              <FormH1>Inicio de Sesión</FormH1>
              <FormLabel htmlFor="for">Correo</FormLabel>
              <FormInput type="email" required></FormInput>
              <FormLabel htmlFor="for">Contraseña</FormLabel>
              <FormInput type="password" required></FormInput>
              <FormButton type="submit">Ingresar</FormButton>
              <Text>Olvide mi contraseña</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
