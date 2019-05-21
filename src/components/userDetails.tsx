import React, { FunctionComponent } from "react";
import { iuserInterface } from "../Interfaces/UserInterface";

export const UserDetails: FunctionComponent<iuserInterface> = props => {
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
