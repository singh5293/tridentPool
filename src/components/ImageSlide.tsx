import { IsliderImage } from "../Interfaces/UserInterface";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ImageSlide: FunctionComponent<IsliderImage> = ({ url }) => {
  const Images = styled.img`
      backgroundImage: url(${url}),
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: 100%;
      width: 100%;
      transition: background-image 0.3s ease-in-out;
    `;

  return (
    <div>
      <Images className="image-slide" alt="carousel" src={url} />
    </div>
  );
};

export { ImageSlide as default };
