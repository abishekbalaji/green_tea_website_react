import "./Home.scss";
import Header from "../../components/Header/Header";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProductsPreview from "../../components/ProductsPreview/ProductsPreview";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <AboutSection />
      <ProductsPreview />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
