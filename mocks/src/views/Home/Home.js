import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
function Home(){
    const [size, setSize] = useState(0);


    window.onresize = () => { setSize(window.innerWidth) };

    useEffect(() => {
        setSize(window.innerWidth)
    }, [])



    return (
        <div className="App-header">
        <Link className="Link" to="/register">
          Register
        </Link>
        <Link className="Link" to="/profile">
          Profile
        </Link></div>
    );
    
}

export default Home;