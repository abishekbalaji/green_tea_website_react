import "./FormInput.scss";

const FormInput = ({ label, green=false, ...otherProps }) => {
  return (
    <div className="form-input-group">
      <input {...otherProps} className={`form-input ${green ? "green" : ""}`} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label ${green ? "green" : ""}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
