import { useNavigate } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/home.svg';

const Navbar = ({ isVisible }) => {
    const navigate = useNavigate();

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

    console.log(window.location.pathname);

    const pathName = window.location.pathname;

    const invisibleNavPaths = ['/register', '/login'];

    if (invisibleNavPaths.includes(pathName)) {
        return;
    }

    return (
        <div className="navbar">
            <div className="main">
                <div>
                    <button
                        className="nav-button"
                        onClick={() => navigate('/')}
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
                <button
                    className="nav-button"
                    onClick={() => navigate('/profile')}
                >
                    <h4>Profile</h4>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
