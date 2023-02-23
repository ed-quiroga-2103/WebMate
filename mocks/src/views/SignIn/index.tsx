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
import api from '../../lib/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    localStorage.clear();

    return (
        <>
            <ScrollToTop />
            <SignInContainer>
                <FormWrap>
                    <FormContent>
                        <Form>
                            <Logo src={logo} />
                            <FormH1>Inicio de Sesión</FormH1>
                            <FormLabel htmlFor="for">Correo:</FormLabel>
                            <FormInput
                                type="email"
                                required
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            ></FormInput>
                            <FormLabel htmlFor="for">Contraseña:</FormLabel>
                            <FormInput
                                type="password"
                                required
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            ></FormInput>
                            {error === '' ? undefined : error}
                            <FormButton
                                type="submit"
                                onClick={async (event) => {
                                    event.preventDefault();
                                    console.log(email, password);

                                    const { token, message } =
                                        await api.auth.login(email, password);

                                    if (message) {
                                        setError(message);
                                    }

                                    if (token) {
                                        localStorage.setItem('mochi', token);
                                        navigate('/home');
                                    }

                                    return;
                                }}
                            >
                                Ingresar
                            </FormButton>
                            <Text>Olvidé mi contraseña</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </SignInContainer>
        </>
    );
};

export default SignIn;
