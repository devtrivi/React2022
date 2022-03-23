import React from "react";
//import "./form-input.styles.css";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${otherProps.value ? "shrink" : ""} form-input-label`}
      ></label>
    ) : null}
  </div>
);
export default FormInput;
