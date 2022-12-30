import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import TestimonialCarousalItem from "./TestimonialCarousalItem/TestimonialCarousalItem";
import img from "../../assets/prof-pic.png";

import "./TestimonialCarousal.scss";

const TESTIMONIALS = [
  {
    imgUrl: img,
    name: "Name 1",
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo iure eaque aspernatur earum eos illo! Odit tempora at quam.",
  },
  {
    imgUrl: img,
    name: "Name 2",
    stars: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo iure eaque aspernatur earum eos illo! Odit tempora at quam.",
  },
  {
    imgUrl: img,
    name: "Name 3",
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo iure eaque aspernatur earum eos illo! Odit tempora at quam.",
  },
];

const TestimonialCarousal = () => {
  return (
    <Carousel
      className="testimonial-carousel"
      autoPlay
      infiniteLoop
      interval={3000}
      emulateTouch
      showThumbs={false}
    >
      {TESTIMONIALS.map((testimonial, idx) => (
        <TestimonialCarousalItem key={idx} {...testimonial} />
      ))}
    </Carousel>
  );
};

export default TestimonialCarousal;
