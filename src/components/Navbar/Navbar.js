import { useNavigate } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/home.svg';
import logIcon from '../../assets/logout.png';
import { useSelector, useDispatch } from 'react-redux';
import auth from '../../api/auth';
import React, { useEffect, useState } from 'react';
import { set } from '../../redux/isAdmin';

const Navbar = ({ isVisible }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user.value);
    const [isAdmin, setIsAdmin] = useState(false);

    const pathName = window.location.pathname;
    const invisibleNavPaths = ['/register', '/login'];

    useEffect(() => {
        let me;

        if (invisibleNavPaths.includes(pathName)) {
            return;
        }

        const fetchMe = async () => {
            me = await auth.me();
            dispatch(set(me.user));

            const isAdmin = me.user.isAdmin;
            setIsAdmin(isAdmin);
        };

        if (!userState) {
            fetchMe();
        } else {
            setIsAdmin(userState.isAdmin || false);
        }
    }, [userState]);

    if (invisibleNavPaths.includes(pathName)) {
        return;
    }

    const buttons = [
        {
            label: 'Cursos',
            navigateTo: '/courses',
        },
        {
            label: 'Contacto',
            navigateTo: '/about',
        },
    ];

    return (
        <div className="navbar">
            <div className="main">
                <div>
                    <button
                        className="nav-button"
                        onClick={() => navigate('/landing')}
                    >
                        <Home className="home-icon" />
                    </button>
                </div>
                <div>
                    {buttons.map((button) => (
                        <button
                            className="nav-button"
                            onClick={() => {
                                navigate(button.navigateTo);
                            }}
                        >
                            <h4>{button.label}</h4>
                        </button>
                    ))}
                </div>
            </div>
            <div className="profile">
                {isAdmin && (
                    <button
                        className="nav-button"
                        onClick={() => navigate('/admin')}
                    >
                        <h4>Administrador</h4>
                    </button>
                )}
                <button
                    className="nav-button"
                    onClick={() => navigate('/profile')}
                >
                    <h4>Perfil</h4>
                </button>
                <img
                    className="logout-button"
                    src={logIcon}
                    alt={'Log out'}
                    onClick={(event) => navigate('/login')}
                />
            </div>
        </div>
    );
};

export default Navbar;
