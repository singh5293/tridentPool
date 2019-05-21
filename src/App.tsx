import React from "react";
// import { UserDetails } from "./components/userDetails";
// import { StudentDetails } from "./components/studentDetails";
// import UcImage from "../src/assets/images/under-construction-1550234.jpg";
// import styled from "styled-components";
import { Carousel } from "./components/Carosul";
import "./styles/styles.css";
// const userData = {
//   name: "prakash",
//   age: 27,
//   address: "aecs layout",
//   dob: "05 Feb 1993"
// };

// const studentData = {
//   marks: 78,
//   collegeName: "sir mvit"
// };

// const CsImage = styled.img`
//   width: 100%;
//   height: 100%;
//   scroll: none;
// `;

// const ImageWrapper = styled.div`
//   width: 100%;
//   height: 100%;
// `;

const App = () => {
  return (
    <>
      <div>
        <Carousel />
        {/* <CsImage src={UcImage} alt="under construction image" /> */}
      </div>
      {/* <UserDetails {...userData} />
      <StudentDetails {...studentData} /> */}
    </>
  );
};

export default App;
