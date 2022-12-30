import Button from "../Button/Button";
import "./ItemCard.scss";

const ItemCard = ({ imgUrl, title, text = undefined, btnText }) => {
  return (
    <div className="item-card-container">
      <img src={imgUrl} alt={text} />

      <span className="item-card-title">{title}</span>
      {text && <span className="item-card-text">{text}</span>}
      <Button>{btnText}</Button>
    </div>
  );
};

export default ItemCard;
