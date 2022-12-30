import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import teaImg1 from "../../assets/tea-img-top2f.jpeg";
import teaImg2 from "../../assets/tea-img-top1f.jpeg";
import teaImg3 from "../../assets/tea-img-top3f.jpeg";
import teaImg4 from "../../assets/tea-img-top4f.jpeg";

import CarousalItem from "../CarousalItem/CarousalItem";

import "./Carousal.scss";

const GREEN_TEA_IMAGES = [teaImg1, teaImg2, teaImg3, teaImg4];

const Carousal = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      emulateTouch
      showThumbs={false}
      className="carousal"
    >
      {GREEN_TEA_IMAGES.map((imgUrl, idx) => (
        <CarousalItem
          key={idx}
          imgUrl={imgUrl}
          alt="green tea"
          legend={`Green Tea ${idx + 1}`}
        />
      ))}
    </Carousel>
  );
};

export default Carousal;
