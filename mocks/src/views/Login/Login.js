import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import eye from "../../assets/view.png";
import closeEye from "../../assets/private.png";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
function Login() {
  const base = "login";
  const passwordRef = useRef();
  const eyeRef = useRef();
  const [logInput, setLogInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [message, setMessage] = useState({ status: false, message: "" });
  const [loader, setLoader] = useState(false);
  window.localStorage.clear();
  const inputHandler = (key, value) => {
    let temp = { ...logInput };
    temp[key] = value;
    setLogInput(temp);
  };

  const showPassword = (event) => {
    event.preventDefault();
    if (passwordRef.current.type === "password") {
      eyeRef.current.src = closeEye;
      passwordRef.current.type = "text";
    } else {
      eyeRef.current.src = eye;
      passwordRef.current.type = "password";
    }
  };

  const verifyUser = (event) => {
    setLoader(true);
    event.preventDefault();
    fetch("url", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(logInput),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          let now = new Date();
          let time = now.getTime();
          let expireTime = time + 1000 * 36000;
          now.setTime(expireTime);
          document.cookie = `token=${
            res.token
          };expires=${now.toUTCString()};path=/`;
          fetch(`url/user/${res.id}`)
            .then((res) => res.json())
            .then((res) => {
              setMessage({ status: true, message: "Succesful" });
              setTimeout(() => {
                window.localStorage.setItem("user", JSON.stringify(res.user));
                navigate("/home");
              }, 1500);
            })
            .catch((res) => {
              setMessage({ status: true, message: "Error on logging" });
              setTimeout(() => {
              setMessage({ status: false, message: "" });
              setLoader(false);
              navigate("/login")
              }, 1500);
            });
        } else {
          setMessage({ status: true, message: "Error on logging" });
          setTimeout(() => {
            setMessage({ status: false, message: "" });
            setLoader(false);
            navigate("/login")
          }, 1500);
        }
      })
      .catch((res) => {
        setMessage({ status: true, message: "Error on logging" });
        setTimeout(() => {
          setMessage({ status: false, message: "" });
          setLoader(false);
          navigate("/login")
        }, 1500);
      });
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
            <h1 className={`${base}__wrapper__title`}>Iniciar Sesión</h1>
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
                onInput={(event) => inputHandler("email", event.target.value)}
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
              <div className={`${base}__wrapper__form__container__password`}>
                <input
                  className={`${base}__wrapper__form__container__password__input`}
                  ref={passwordRef}
                  id="input-password"
                  onInput={(event) =>
                    inputHandler("password", event.target.value)
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
            <div className={`${base}__wrapper__form__submit-container`}>
              <button
                type="submit"
                className={`${base}__wrapper__form__submit-container__submit`}
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
        <div className={`${base}__section--white`}>
          <div className={`${base}__create-container`}>
            <h2 className={`${base}__create-container__title`}>¿No tenés cuenta?</h2>
            <p className={`${base}__create-container__desc`}>
              Podés crear una cuenta de manera muy sencila y rápida 
            </p>
            <Link className={`${base}__create-container__create`} to="/register">
              Crear Cuenta
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;