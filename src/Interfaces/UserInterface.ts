export interface iuserInterface {
  name: string;
  age: number;
  address: string;
  dob: string;
}

export interface istuDetails {
  marks: number;
  collegeName: string;
}

export interface ICarousel {}
export interface ICarouselState {
  currentImageIndex: number;
}

export interface IsliderImage {
  url: string;
}

export interface IArrows {
  direction: string;
  clickFunction: any;
  glyph: any;
}
