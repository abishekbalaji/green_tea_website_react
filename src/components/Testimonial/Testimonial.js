import TestimonialCarousal from "../TestimonialCarousal/TestimonialCarousal";
import "./Testimonial.scss";

import img from "../../assets/gteacard1.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial-section-container">
      <div className="testimonial-section_carousel">
        <TestimonialCarousal />
      </div>
      <div
        className="testimonial-section_image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
    </div>
  );
};

export default Testimonial;
