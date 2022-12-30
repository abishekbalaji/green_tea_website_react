import "./Home.scss";
import Header from "../../components/Header/Header";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProductsPreview from "../../components/ProductsPreview/ProductsPreview";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <ProductsPreview />
      <Testimonial />
    </div>
  );
};

export default Home;
