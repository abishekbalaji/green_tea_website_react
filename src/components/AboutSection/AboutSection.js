import "./AboutSection.scss";

import img from "../../assets/gteaabout.jpg";

const AboutSection = () => {
  return (
    <div id="about" className="about-section_container">
      <div
        className="about-section_image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="about-section_text-container">
        <span className="about-section_main-title">About</span>
        <span className="about-section_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est at aut
          deleniti quas facere quisquam ipsam eius eos corrupti voluptas?
        </span>
        <span className="about-section_sub-title">Healty and Natural</span>
        <span className="about-section_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolores
          doloribus non consequuntur minima harum assumenda nisi dolorum saepe
          eaque libero officia nulla, in ea expedita repudiandae veritatis?
          Deleniti, accusamus?
        </span>
        <span className="about-section_sub-title">Delivery</span>
        <span className="about-section_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque
          esse, qui autem ex voluptas dolorem officia doloribus aut molestias!
        </span>
      </div>
    </div>
  );
};

export default AboutSection;
