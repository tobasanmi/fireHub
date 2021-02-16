import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
"https://i.ibb.co/1mHHWXg/1-Fibrehub-welcome.jpg",
"https://i.ibb.co/93kZHNW/2-Fibrehub-home-office.jpg",
"https://i.ibb.co/CV6DbPz/4-Fibrehub-free-calls.jpg",
"https://i.ibb.co/gD61NPt/3-Fibrehub-unlimited.jpg",
"https://i.ibb.co/cczRyC9/5-Fibrehub-vid-stream.jpg" 
];


const SlidePictures = () => {
  const [autoplay, setAutoplay] = useState(true);

  const style = {
    padding: "0px",
    height: "600px",
    width:"100%",
  }

  return (
    <div className = 'slide-container'>
      <div>
        <Fade autoplay={autoplay}>
          <div>
            <img src = {slideImages[0]} style = {style}/>
          </div>
          <div>
          <img src = {slideImages[1]} style = {style}/>
          </div>
          <div>
          <img src = {slideImages[2]} style = {style}/>
          </div>
          <div>
          <img src = {slideImages[3]} style = {style}/>
          </div>
          <div>
          <img src = {slideImages[4]} style = {style}/>
          </div>
        </Fade>
      </div>
</div>
  );
};

export default SlidePictures;