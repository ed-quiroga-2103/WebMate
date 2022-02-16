import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import { AddCourseSection, AddCourseWrapper } from "./AddCourseElements";

function AddCourse({ graph }: { graph: any }) {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="partner" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AddCourseSection>
        <AddCourseWrapper></AddCourseWrapper>
      </AddCourseSection>
    </>
  );
}

export default AddCourse;
