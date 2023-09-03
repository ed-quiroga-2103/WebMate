import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useBreakPoint from './hooks/useBreakPoint';
import Navbar from './components/Navbar/Navbar';

function App() {
    const [size, setSize] = useState(0);
    let device = useBreakPoint(size);
    window.onresize = () => {
        setSize(window.innerWidth);
    };
    useEffect(() => {
        setSize(window.innerWidth);
    }, []);

    if (device === 'mobile') {
        return <></>;
    } else {
        return (
            <>
                <Navbar />
                <Outlet />
            </>
        );
    }
}

export default App;
