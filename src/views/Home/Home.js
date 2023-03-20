import {React,useEffect, useState} from "react";
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
        </Link>
        <Link className="Link" to="/login">
          Login
        </Link>
        <Link className="Link" to="/about">
          Contact/About
        </Link>
        <Link className="Link" to="/courses">
          Courses
        </Link>
        <Link className="Link" to="/landing">
          Landing
        </Link>
        <Link className="Link" to="/quiz">
          Quiz
        </Link></div>
    );
    
}

export default Home;