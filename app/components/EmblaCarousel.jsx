"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/legacy/image";
import RotateDevice from "./RotateDevice";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  // const width = window.screen.width * window.devicePixelRatio;
  // const height = window.screen.height * window.devicePixelRatio;

  // console.log(width, height)
  useEffect(() => {
    const handleResize = () => {
      const width = window.screen.width * window.devicePixelRatio;
      const height = window.screen.height * window.devicePixelRatio;
      setScreenWidth(width);
      setScreenHeight(height);

      // show warning if screen width is less than screen height
      if (screenWidth <= screenHeight) {
        console.warn("Please rotate your device for better experience handleResize");
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth, screenHeight]);

  useEffect(() => {
    getScreenSize();
  }, []);

  const getScreenSize = () => {
    const width = window.screen.width * window.devicePixelRatio;
    const height = window.screen.height * window.devicePixelRatio;

    setScreenWidth(width);
    setScreenHeight(height);

    if (width <= height) {
      console.warn("Please rotate your device for better experience");
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  return (
    <section className="embla" id="gallery">
      <div className="embla__viewport" ref={emblaRef}>
        {showWarning && <RotateDevice />}
        {!showWarning && (
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div
                  className="embla__slide__number"
                  style={{
                    width: "100vw",
                    height: "100vh",
                    position: "relative",
                  }}
                >
                  <Image
                    src={`${index}`}
                    alt={""}
                    fill="true"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={`${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EmblaCarousel;
