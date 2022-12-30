import "./Button.scss";

const Button = ({ children, inverted, ...otherProps }) => {
  return (
    <button className={`button ${inverted ? "inverted" : ""}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
