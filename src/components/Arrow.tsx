import { IArrows } from "../Interfaces/UserInterface";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Arrow: FunctionComponent<IArrows> = ({
  direction,
  clickFunction,
  glyph
}) => {
  const Arrow = styled.div`
    color: #14b6d4;
    cursor: pointer;
    font-size: 2rem;
    position: fixed;
    top: 50%;
    left: ${({ dir }) => dir === "left" && "1rem"};
    right: ${({ dir }) => dir === "right" && "1rem"};
  `;
  return (
    <Arrow dir={direction} onClick={clickFunction}>
      {glyph}
    </Arrow>
  );
};

export { Arrow as default };
