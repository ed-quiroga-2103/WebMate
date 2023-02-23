import React from "react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import next from "../../assets/next.png";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
function Register() {
  const base = "create-account";
  const [selectedFile, setSelectedFile] = useState(null);
  const [srcImg, setSrcImg] = useState("#");
  const [data, setData] = useState({
    fullName: "",
    idPhoto: "as",
    carnet: "",
    carrera: "Ingeniería en Computadores",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({ status: false, message: "" });
  const [loader, setLoader] = useState(false);
  
  const refPassword = useRef();
  const navigate = useNavigate();

  const inputHandler = (key, value) => {
    let temp = { ...data };
    temp[key] = value;
    setData(temp);
  };

  const onFileChange = (event) => {
    const fileX = event.target.files[0];
    if (fileX) {
      setSrcImg(window.URL.createObjectURL(fileX));
    }
    setSelectedFile(event.target.files[0]);
    let file = new FormData();
    file.append("file", event.target.files[0]);
    file.append("upload_preset", "zigps2rs");
    fetch("https://api.cloudinary.com/v1_1/daidw64zz/image/upload", {
      method: "POST",
      body: file,
    })
      .then((response) => response.json())
      .then(async (response) => {
        let temp = { ...data };
        temp["idPhoto"] = response.url;
        setData(temp);
      })
      .catch((err) => console.log("Error: ", err));
  };

  const handleblock = (evt) => {
    if (evt.target.value.length === 10 && evt.which !== 8) {
      evt.preventDefault();
    }
    if (evt.which === 69 || evt.which === 189 || evt.which === 187) {
      evt.preventDefault();
    }
  };
  //QUIROGA: aquí mando nuevo registro verificar endppoint y que se envía info correcta
  const submitInfo = async (event) => {
    setLoader(true);
    event.preventDefault();
    if (data.password !== refPassword.current.value) {
      alert("Passwords dont match");
    } else {
      let temp = { ...data };
      
      fetch("url", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(temp),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "Succesful!") {
            setMessage({ status: true, message: "Succesful" });
            setTimeout(() => {
              window.localStorage.setItem("user", JSON.stringify(res.user));
              navigate("/login");
            }, 1500);
          } else {
            setMessage({ status: true, message: res.message });
            setTimeout(() => {
              setMessage({ status: false, message: "" });
              setLoader(false);
              navigate("/create")
            }, 1500);
          }
        })
        .catch((res) => {
          setMessage({ status: true, message: res.message });
          setTimeout(() => {
            setMessage({ status: false, message: "" });
            setLoader(false);
            navigate("/create")
          }, 1500);
        });
    }
  };

  return (
    <main className={`${base}__root`}>
      {loader ? <Loader /> : null}
      {message.status ? <Message message={message.message} /> : null}
      <div className={`${base}__header`}>
        <div className={`${base}__header__container`}>
          <h1 className={`${base}__header__container__title`}>
            Crear cuenta
          </h1>
          <p className={`${base}__header__container__desc`}>
            Unite a la app de Mate, para que no perdás de ningun material, quices o examenes y podás
            prepararte de una mejor manera.
          </p>
        </div>
      </div>
      <div className={`${base}__body`}>
        <div className={`${base}__body__container`}>
          <form
            className={`${base}__body__container__form`}
            onSubmit={(event) => submitInfo(event)}
          >
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-full-name" className={`${base}__label`}>
                Nombre Completo
              </label>
              <input
                className={`${base}__input`}
                type="text"
                id="input-full-name"
                required
                placeholder="John Doe"
                onInput={(event) => {
                  inputHandler("fullName", event.target.value);
                }}
              />
            </div>
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-id" className={`${base}__label`}>
                Carnet
              </label>
              <input
                className={`${base}__input`}
                type="number"
                id="input-id"
                placeholder="1123478900"
                title="Los carnets tienen tienen 10 números!"
                maxLength={10}
                minLength={10}
                required
                onInput={(event) => {
                  inputHandler("carnet", event.target.value);
                }}
                onKeyDown={(event) => handleblock(event)}
              ></input>
            </div>
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-id-photo" className={`${base}__label`}>
                Foto
              </label>
              <input
                className={`${base}__input--file`}
                type="file"
                id="input-id-photo"
                accept="image/*"
                required
                capture
                onChange={(event) => onFileChange(event)}
              />
            </div>
            {selectedFile ? (
              <div className={`${base}__preview`}>
                <img
                  className={`${base}__preview__img`}
                  src={srcImg}
                  alt="Your upload"
                />
              </div>
            ) : null}
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-source-income" className={`${base}__label`}>
                Carrera
              </label>
              <select
                id="input-source-income"
                className={`${base}__input`}
                name="career"
                onInput={(event) =>
                  inputHandler("carrera", event.target.value)
                }
              >
                <option name="computadores" value="Ingeniería en Computadores">
                  Ingeniería en Computadores
                </option>
                <option name="meca" value="Ingeniería en Mecatrónica">
                  Ingeniería en Mecatrónica
                </option>
                <option name="mante" value="Ingeniería en Mantenimiento">
                  Ingeniería en Mantenimiento
                </option>
                <option name="industrial" value="Ingeniería Industrial">
                  Ingeniería Industrial
                </option>
                <option name="compu" value="Ingeniería en Computación">
                  Ingeniería en Computación
                </option>
                <option name="admin" value="Administración de Empresas">
                Administración de Empresas
                </option>
              </select>
            </div>
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-email" className={`${base}__label`}>
                Email
              </label>
              <input
                className={`${base}__input`}
                type="text"
                id="input-email"
                autoComplete="email"
                required
                placeholder="john.doe@estudiantec.ac.cr"
                pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}.[a-z]{2,3}"
                title="Wrong email"
                onInput={(event) => {
                  inputHandler("email", event.target.value);
                }}
              />
            </div>
            <div className={`${base}__body__container__form__wrapper`}>
              <label htmlFor="input-password" className={`${base}__label`}>
                Contraseña
              </label>
              <input
                title="La contraseña tiene que tener una mayúscula, una minúscula, números y algún caracter especial. Largo mínimo de 8 caracteres"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,40}$"
                id="input-password"
                minLength={8}
                maxLength={40}
                className={`${base}__input`}
                type="password"
                autoComplete="new-password"
                required
                onInput={(event) => {
                  inputHandler("password", event.target.value);
                }}
              />
            </div>
            <div className={`${base}__body__container__form__wrapper`}>
              <label
                htmlFor="input-confirm-password"
                className={`${base}__label`}
              >
                Confirma Contraseña
              </label>
              <input
                id="input-confirm-password"
                ref={refPassword}
                className={`${base}__input`}
                type="password"
                required
                autoComplete="off"
              />
            </div>
            <div className={`${base}__btn-container`}>
              <button type="submit" className={`${base}__btn-container__btn`}>
                Enviar
                <img
                  className={`${base}__btn-container__img`}
                  src={next}
                  alt="Submit Information"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`${base}__login`}>
        <Link className={`${base}__login__link`} to="/login">
          ¿Ya tenés una cuenta?
        </Link>
      </div>
    </main>
  );
}

export default Register;