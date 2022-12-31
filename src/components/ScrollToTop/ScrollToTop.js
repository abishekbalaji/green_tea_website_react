import "./ScrollToTop.scss";

const ScrollToTop = () => {
  return (
    <div onClick={() => window.scrollTo(0, 0)} className="scroll-to-top-container">
      <span className="scroll-to-top-icon">&uarr;</span>
    </div>
  );
};

export default ScrollToTop;
