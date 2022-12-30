import "./CarousalItem.scss";

const CarousalItem = ({ imgUrl, alt, legend }) => {
  return (
    <div>
      <img src={imgUrl} alt={alt} />
      <p className="legend">{legend}</p>
    </div>
  );
};

export default CarousalItem;
