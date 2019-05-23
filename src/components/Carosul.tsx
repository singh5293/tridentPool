import { ICarousel, ICarouselState } from "../Interfaces/UserInterface";
import React from "react";
import styled from "styled-components";
import Arrow from "./Arrow";
import ImageSlide from "./ImageSlide";

const importAll = (r: any): any => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("../assets/images", false, /\.(png|jpe?g|JPG|svg)$/)
);
const imgUrls: string[] = images;
const CarouselWrapper = styled.div`
  height: 50%;
  margin: auto;
  width: 76%;
`;

export class Carousel extends React.Component<ICarousel, ICarouselState> {
  state: ICarouselState = {
    currentImageIndex: 0
  };

  previousSlide = (): void => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = (): void => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    return (
      <CarouselWrapper>
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </CarouselWrapper>
    );
  }
}
