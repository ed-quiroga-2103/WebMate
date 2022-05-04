import { useState, FunctionComponent, useEffect } from 'react';

import Footer from '../../components/Footer';
import Landing from '../Landing';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../lib/api';

const Home: FunctionComponent = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };

    useEffect(() => {
        const fetchMe = async () => {
            const data = await api.auth.me();
            console.log(data);
        };

        fetchMe();
    }, []);

    return (
        <>
            <Navbar toggle={toggle} on="home" />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Landing />
            <Footer />
        </>
    );
};

export default Home;
