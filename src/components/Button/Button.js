import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google",
  inverted: "inverted",
};

const Button = ({ children, btnType, ...otherProps }) => {
  return (
    <button
      className={`button ${BUTTON_TYPE_CLASSES[btnType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
