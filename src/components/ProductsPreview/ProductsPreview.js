import ItemCard from "../ItemCard/ItemCard";
import "./ProductsPreview.scss";

import img from "../../assets/gteacard2.jpg";
import Button from "../Button/Button";

const products = [
  {
    imgUrl: img,
    title: "Some Tea",
    btnText: "Add to Cart",
  },
  {
    imgUrl: img,
    title: "Some Tea",
    btnText: "Add to Cart",
  },
  {
    imgUrl: img,
    title: "Some Tea",
    btnText: "Add to Cart",
  },
  {
    imgUrl: img,
    title: "Some Tea",
    btnText: "Add to Cart",
  },
  {
    imgUrl: img,
    title: "Some Tea",
    btnText: "Add to Cart",
  },
  {
    imgUrl: img,
    title: "Some Tea",
    btnText: "Add to Cart",
  },
  {
    imgUrl: img,
    title: "Some Tea",
    btnText: "Add to Cart",
  },
  {
    imgUrl: img,
    title: "Some Tea",
    btnText: "Add to Cart",
  },
];

const ProductsPreview = () => {
  return (
    <div className="products-preview_container">
      <div className="products-preview_text">
        <h1>What we sell</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          eaque.
        </h2>
      </div>
      <div className="products-preview_items-container">
        {products.map((product, idx) => (
          <ItemCard key={idx} {...product} />
        ))}
      </div>
      <Button inverted>{"More..."}</Button>
    </div>
  );
};

export default ProductsPreview;
