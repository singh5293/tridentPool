import React from "react";
import { stuDetails } from "../Interfaces/UserInterface";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    cursor: pointer;
  }
`;
export class StudentDetails extends React.Component<stuDetails> {
  render() {
    const { marks, collegeName } = this.props;
    return (
      <>
        <Button>click me!</Button>
        <h2>student details</h2>
        <p>{marks}</p>
        <p>{collegeName}</p>
      </>
    );
  }
}
