"use client"
/* eslint-disable @next/next/no-img-element */
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  // console.log('slides: ', slides)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number"  style={{width: '100vw', height: '100vh', position: 'relative'}}>
                <Image
                  src={`${index}`}
                  alt={''}
                  fill="true"
                  layout="fill"
                  objectFit="cover"
                  aspectRatio={16 / 9}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
