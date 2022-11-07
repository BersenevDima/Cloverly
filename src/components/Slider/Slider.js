import React from "react";
import { Back } from "./Slider-elements";
import Img1 from '../Slider/image 1.jpg';
import Img2 from '../Slider/image 2.jpg';
import Img3 from '../Slider/image 3.jpg';
import Img4 from '../Slider/image 4.jpg';
import Img5 from '../Slider/image 5.jpg';

const Slider = () => {
  return (
    <Back>
        <img src={Img1}/>
        <img src={Img2}/>
        <img src={Img3}/>
        <img src={Img4}/>
        <img src={Img5}/>
    </Back>
  );
};
 
export default Slider;