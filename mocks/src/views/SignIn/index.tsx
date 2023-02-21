import logo from './mathLogo.png';
import {
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Logo,
    SignInContainer,
    Text,
} from './SignInElements';
import ScrollToTop from '../ScrollToTop';

const SignIn = () => {
    return (
        <>
            <ScrollToTop />
            <SignInContainer>
                <FormWrap>
                    <FormContent>
                        <Form action="/home">
                            <Logo src={logo} />
                            <FormH1>Inicio de Sesión</FormH1>
                            <FormLabel htmlFor="for">Correo:</FormLabel>
                            <FormInput type="email" required></FormInput>
                            <FormLabel htmlFor="for">Contraseña:</FormLabel>
                            <FormInput type="password" required></FormInput>
                            <FormButton type="submit">Ingresar</FormButton>
                            <Text>Olvidé mi contraseña</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </SignInContainer>
        </>
    );
};

export default SignIn;
