import React from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import ImageFadeIn from 'react-image-fade-in';
import 'pure-react-carousel/dist/react-carousel.es.css';

interface Props {
  images: string[];
}

const Carousel: React.FC<Props> = ({ images }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={10}
      naturalSlideHeight={10}
      totalSlides={3}
      className="flex-start flex-basis-60p"
    >
      <Slider className="rounded-xl sm:w-full md:w-full mt-4 shadow-2xl">
        {/* For slides */}
        {images.map((image, index) => {
          return (
            <Slide key={`slide-${index}`} index={index} className="flex items-center">
              <ImageFadeIn src={image} className="inline-block object-contain w-full h-full" />
            </Slide>
          );
        })}
      </Slider>
      <div className="flex justify-between w-full gap-8">
        {/* For thumbnails */}
        {images.map((image, index) => {
          return (
            <Dot
              key={`slide-thumb-${index}`}
              slide={index}
              className="sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-2lg w-24 h-24 mt-8 overflow-hidden shadow-2xl"
            >
              <ImageFadeIn src={image} className="inline-block object-contain w-full h-full" />
            </Dot>
          );
        })}
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
