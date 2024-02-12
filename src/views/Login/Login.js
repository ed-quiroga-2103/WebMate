import { React, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import eye from '../../assets/view.png';
import closeEye from '../../assets/private.png';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { set } from '../../redux/isAdmin';

import auth from '../../api/auth';

function Login() {
    const base = 'login';
    const passwordRef = useRef();
    const eyeRef = useRef();
    const [logInput, setLogInput] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState(undefined);
    const navigate = useNavigate();
    const [message, setMessage] = useState({ status: false, message: '' });
    const [loader, setLoader] = useState(false);

    const dispatch = useDispatch();

    window.localStorage.clear();
    dispatch(set(undefined));
    const inputHandler = (key, value) => {
        let temp = { ...logInput };
        temp[key] = value;
        setLogInput(temp);
    };

    const showPassword = (event) => {
        event.preventDefault();
        if (passwordRef.current.type === 'password') {
            eyeRef.current.src = closeEye;
            passwordRef.current.type = 'text';
        } else {
            eyeRef.current.src = eye;
            passwordRef.current.type = 'password';
        }
    };

    //QUIROGA: aquí se verifica usuario, hay que poner endpoint correcto para ingresar de aqui
    const verifyUser = async (event) => {
        setLoader(true);
        setLoginError(undefined);
        event.preventDefault();

        const loginResponse = await auth.login(
            logInput.email,
            logInput.password
        );

        if (loginResponse.token) {
            let now = new Date();
            let time = now.getTime();
            let expireTime = time + 1000 * 36000;
            now.setTime(expireTime);
            document.cookie = `token=${
                loginResponse.token
            };expires=${now.toUTCString()};path=/`;
            localStorage.setItem('token', loginResponse.token);
            const me = await auth.me();

            console.log(me);

            dispatch(set(me.user));

            localStorage.setItem(
                'me',
                JSON.stringify({ user: { email: me.user.email } })
            );
            setLoader(false);
            navigate('/landing');
        } else {
            setLoginError('Usuario o contrasena incorrectos.');
            setLoader(false);
        }

    
    };
    return (
        <main className={`${base}__root`}>
            {loader ? <Loader /> : null}
            {message.status ? <Message message={message.message} /> : null}
            <div className={`${base}__wrapper`}>
                <div className={`${base}__section`}>
                    <form
                        className={`${base}__wrapper__form`}
                        onSubmit={(event) => verifyUser(event)}
                    >
                        <h1 className={`${base}__wrapper__title`}>
                            Iniciar Sesión
                        </h1>
                        <div className={`${base}__wrapper__form__container`}>
                            <label
                                htmlFor="input-email"
                                className={`${base}__wrapper__form__container__label`}
                            >
                                Correo
                            </label>
                            <input
                                className={`${base}__wrapper__form__container__input`}
                                type="text"
                                id="input-email"
                                onInput={(event) =>
                                    inputHandler('email', event.target.value)
                                }
                                pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}.[a-z]{2,3}"
                                title="Email incorrecto"
                                autoComplete="username"
                                required
                            ></input>
                        </div>
                        <div className={`${base}__wrapper__form__container`}>
                            <label
                                htmlFor="input-password"
                                className={`${base}__wrapper__form__container__label`}
                            >
                                Contraseña
                            </label>
                            <div
                                className={`${base}__wrapper__form__container__password`}
                            >
                                <input
                                    className={`${base}__wrapper__form__container__password__input`}
                                    ref={passwordRef}
                                    id="input-password"
                                    onInput={(event) =>
                                        inputHandler(
                                            'password',
                                            event.target.value
                                        )
                                    }
                                    type="password"
                                    title="La contraseña tiene que tener una mayúscula, una minúscula, números y algún caracter especial. Largo mínimo de 8 caracteres"
                                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,40}$"
                                    minLength={8}
                                    maxLength={40}
                                    autoComplete="current-password"
                                    required
                                ></input>
                                <button
                                    className={`${base}__wrapper__form__container__password__view`}
                                    onClick={(event) => showPassword(event)}
                                >
                                    <img
                                        ref={eyeRef}
                                        src={eye}
                                        alt="Toggle password visibility"
                                    />
                                </button>
                            </div>
                        </div>
                        {loginError ? (
                            <span className="text_error">{loginError}</span>
                        ) : null}
                        <div
                            className={`${base}__wrapper__form__submit-container`}
                        >
                            <button
                                type="submit"
                                className={`${base}__wrapper__form__submit-container__submit`}
                                onClick={verifyUser}
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>
                </div>
                <div className={`${base}__section--white`}>
                    <div className={`${base}__create-container`}>
                        <h2 className={`${base}__create-container__title`}>
                            ¿No tenés cuenta?
                        </h2>
                        <p className={`${base}__create-container__desc`}>
                            Podés crear una cuenta de manera muy sencila y
                            rápida
                        </p>
                        <Link
                            className={`${base}__create-container__create`}
                            to="/register"
                        >
                            Crear Cuenta
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
