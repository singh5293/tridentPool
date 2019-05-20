import React from "react";
import { UserDetails } from "./components/userDetails";
import { StudentDetails } from "./components/studentDetails";

const userData = {
  name: "prakash",
  age: 27,
  address: "aecs layout",
  dob: "05 Feb 1993"
};

const studentData = {
  marks: 78,
  collegeName: "sir mvit"
};

const App = () => {
  return (
    <>
      <div> Coming Soon!</div>
      <UserDetails {...userData} />
      <StudentDetails {...studentData} />
    </>
  );
};

export default App;
