import React, { FunctionComponent } from "react";
import { userInterface } from "../Interfaces/UserInterface";

export const UserDetails: FunctionComponent<userInterface> = props => {
  const { name, age, address, dob } = props;

  return (
    <>
      <h2>userDetails</h2>
      <p>{name}</p>
      <p>{age}</p>
      <p> {address}</p>
      <p>{dob}</p>
    </>
  );
};
