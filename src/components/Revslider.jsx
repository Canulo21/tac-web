import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "animate.css";

const fadeImages = [
  {
    url: "rev-slider/image_1.jpg",
    caption: "Slide 1",
  },
  {
    url: "rev-slider/image_2.jpg",
    caption: "Slide 2",
  },
];

const Revslider = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div>
              <img
                id="rev"
                alt="revsliders"
                src={fadeImage.url}
                width={width}
                height={height}
                onLoad={(e) => {
                  setHeight(e.currentTarget.naturalHeight + "px");
                  setWidth(e.currentTarget.naturalWidth + "px");
                }}
              ></img>
            </div>
          </div>
        ))}
      </Fade>
      <div id="banner-text-wrap">
        <div
          id="banner-text-container"
          className="animate__animated animate__zoomInDown animate__slow	3s "
        >
          <p className="animate__animated animate__bounceInLeft  animate__slow	2s animate__delay-2s">
            <strong>
              tudela <br />
              alliance church
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revslider;
