import React, { useState, FunctionComponent } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Landing from "../Landing";

const Home: FunctionComponent = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
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
