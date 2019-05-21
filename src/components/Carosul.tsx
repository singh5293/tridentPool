import {
  ICarousel,
  ICarouselState,
  IsliderImage,
  IArrows
} from "../Interfaces/UserInterface";
import React, { FunctionComponent } from "react";

function importAll(r: any): any {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/images", false, /\.(png|jpe?g|JPG|svg)$/)
);
const imgUrls: string[] = images;
// [
//   "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
//   "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
//   "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
//   "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
//   "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg",
//   UcImage
// ];

const ImageSlide: FunctionComponent<IsliderImage> = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div>
      <img className="image-slide" alt="carousel" style={styles} src={url} />
    </div>
  );
};

const Arrow: FunctionComponent<IArrows> = ({
  direction,
  clickFunction,
  glyph
}) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

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
      <div className="carousel">
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
      </div>
    );
  }
}
