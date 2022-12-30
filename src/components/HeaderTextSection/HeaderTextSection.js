import "./HeaderTextSection.scss";

import img1 from "../../assets/gteacard1.jpg";
import img2 from "../../assets/gteacard2.jpg";
import img3 from "../../assets/gteacard3.jpg";
import ItemCard from "../ItemCard/ItemCard";

const DISPLAY_ITEMS = [
  {
    imgUrl: img1,
    title: "Some Tea",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur nihil officia rerum repellat atque.",
    btnText: "Read More",
  },
  {
    imgUrl: img2,
    title: "Some Tea",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur nihil officia rerum repellat atque.",
    btnText: "Read More",
  },
  {
    imgUrl: img3,
    title: "Some Tea",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur nihil officia rerum repellat atque.",
    btnText: "Read More",
  },
];

const HeaderTextSection = () => {
  return (
    <>
      <div className="header-info-container">
        <h1 className="header-text-section_title">Brand name - brand phrase</h1>
        <h2 className="header-text-section_sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="header-text-section_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          ipsa sequi asperiores harum, molestiae alias suscipit, corporis
          voluptates laudantium voluptatum quaerat quia atque deserunt cumque?
          Incidunt tempore officia, deserunt veritatis necessitatibus voluptatem
          itaque dolore magni ipsam a aliquid exercitationem ipsa odio minima.
        </p>
        <p className="header-text-section_text">
          Corporis voluptates laudantium voluptatum quaerat quia atque deserunt
          cumque? Incidunt tempore officia, deserunt veritatis necessitatibus
          voluptatem itaque dolore magni ipsam a aliquid exercitationem ipsa
          odio minima.
        </p>

        <div className="preview-item-cards">
          {DISPLAY_ITEMS.map((item, idx) => (
            <ItemCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeaderTextSection;
