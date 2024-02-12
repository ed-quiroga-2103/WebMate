import React, { useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import auth from '../../api/auth';
import Loader from '../../components/Loader/Loader';
function Register() {
    const base = 'create-account';

    const [searchParams] = useSearchParams();

    const code = searchParams.get('code')

    const [userData, setUserData] = useState({
        firstName: '',
        lastName:'',
        email: '',
        password: '',
        dni: '',
        major: ''
    })


    const updateUserData = (field) => (value) => {
        setUserData({ ...userData, [field]: value })
    }




    const [loader, setLoader] = useState(false);

    const refPassword = useRef();
    const navigate = useNavigate();

    const handleblock = (evt) => {
        if (evt.target.value.length === 10 && evt.which !== 8) {
            evt.preventDefault();
        }
        if (evt.which === 69 || evt.which === 189 || evt.which === 187) {
            evt.preventDefault();
        }
    };

    const submitInfo = async (event) => {
        setLoader(true);
        event.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            alert('Passwords dont match');
            setLoader(false)
            return;
        } else {
            const response = await auth.register({
                code,
                name: userData.firstName,
                lastName: userData.lastName,
                admitionYear: userData.dni.substring(0, 4),
                password: userData.password,
                dni: userData.dni,
                email: userData.email,
                lastCourse: 'N/A',
            });

            localStorage.setItem('token', response.token);
            const me = await auth.me();
            localStorage.setItem('me', JSON.stringify(me));
            setLoader(false);
            navigate('/landing');
        }
    };

    console.log(code)

    if(!code){
        alert("No tienes un enlace de registro valido!")
    }

    return (
        <main className={`${base}__root`}>
            {loader ? <Loader /> : null}
            <div className={`${base}__header`}>
                <div className={`${base}__header__container`}>
                    <h1 className={`${base}__header__container__title`}>
                        Crear cuenta
                    </h1>
                    <p className={`${base}__header__container__desc`}>
                        Unite a la app de Mate, para que no perdás de ningun
                        material, quices o examenes y podás prepararte de una
                        mejor manera.
                    </p>
                </div>
            </div>
            <div className={`${base}__body`}>
                <div className={`${base}__body__container`}>
                    <div className='register-form'>
                        <div className='registration-section'>
                            <div className='field'>
                                <label>Correo</label>
                                <input onChange={(e)=>{updateUserData('email')(e.target.value)}}/>
                            </div>
                            <div className='field'>
                                <label>Password</label>
                                <input  type='password' onChange={(e)=>{updateUserData('password')(e.target.value)}}/>
                            </div>
                            <div className='field'>
                                <label>Confirmar Password</label>
                                <input type='password'onChange={(e)=>{updateUserData('confirmPassword')(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='registration-section'>
                            <div className='field'>
                                <label>Nombre</label>
                                <input onChange={(e)=>{updateUserData('firstName')(e.target.value)}}/>
                            </div>
                            <div className='field'>
                                <label>Apellido</label>
                                <input onChange={(e)=>{updateUserData('lastName')(e.target.value)}}/>
                            </div>
                            <div className='field'>
                                <label>Carrera</label>
                                <input onChange={(e)=>{updateUserData('major')(e.target.value)}}/>
                            </div>
                            <div className='field'>
                                <label>Carnet</label>
                                <input onChange={(e)=>{updateUserData('dni')(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='confirm-button' onClick={submitInfo}>Confirmar</button>
                    </div>
                </div>
            </div>
            <div className={`${base}__login`}>
                <Link className={`${base}__login__link`} to="/">
                    ¿Ya tenés una cuenta?
                </Link>
            </div>
        </main>
    );
}

export default Register;
