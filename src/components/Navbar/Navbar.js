import { Link } from "react-router-dom";
import profilePic from "../../assets/profile.jpg";
import logo from "../../assets/mathLogo.png";
import logout from "../../assets/logout.png";
import currentUser from "../../assets/currentUser.json";
function Navbar() {
  const base = "navbar";
  //const currentUser = JSON.parse(window.localStorage.getItem("user"));

  return (
    <nav className={`${base}__root`}>
      <div className={`${base}__logo`}>
        <Link to="/landing" className={`${base}__logo__container`}>
          <img
            className={`${base}__logo__container__img`}
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className={`${base}__user`}>
        <Link to="/profile" className={`${base}__user__img-container`}>
          <img
            className={`${base}__user__img-container__img`}
            src={profilePic}
            alt="profile"
          />
        </Link>
        <Link to="/profile" className={`${base}__user__name`}>
          {currentUser.fullName}
        </Link>
      </div>
      <div className={`${base}__navigation`}>
        <ul className={`${base}__navigation__list`}>
          <li className={`${base}__navigation__list__element`}>
            <Link
              to="/courses"
              className={`${base}__navigation__list__element__link`}
            >
              Cursos
            </Link>
          </li>
          <li className={`${base}__navigation__list__element`}>
            <Link
              to="/about"
              className={`${base}__navigation__list__element__link`}
            >
              Sobre
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${base}__logo`}>
        <Link to="/" className={`${base}__logo__container`}>
          <img
            className={`${base}__logo__container__img--small`}
            src={logout}
            alt="logo"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;