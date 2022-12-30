import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./TestimonialCarousalItem.scss";

const TestimonialCarousalItem = ({ imgUrl, name, stars, text }) => {
  return (
    <div className="testimonial-carousal-item">
      <img id="testimonial-item-image" src={imgUrl} alt={name} />
      <div className="testimonial-item-stars">
        {[...Array(stars).keys()].map((_, idx) => (
          <FontAwesomeIcon className="star-icon" key={idx} icon={faStar} />
        ))}
      </div>
      <span className="testimonial-item-name">{name}</span>
      <p className="testimonial-item-text">{text}</p>
    </div>
  );
};

export default TestimonialCarousalItem;
