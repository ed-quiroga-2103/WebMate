import {React} from "react";
import { Link } from "react-router-dom";
function Home(){


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
        </Link>
        <Link className="Link" to="/admin">
          Admin
        </Link>
        <Link className="Link" to="/quizMaker">
          QuizMaker
        </Link>
        <Link className="Link" to="/record">
          Record
        </Link></div>
    );
    
}

export default Home;