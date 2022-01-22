import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import {
  SingleCourseSection,
  SingleCourseWrapper,
} from "./SingleCourseElements";

function SingleCourse() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="partner" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SingleCourseSection>
        <SingleCourseWrapper></SingleCourseWrapper>
      </SingleCourseSection>
    </>
  );
}

export default SingleCourse;
