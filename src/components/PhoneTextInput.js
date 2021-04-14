import React from "react";
import { useField } from "formik";

const PhoneTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} style={{ paddingBottom: "10px" }}>
        {label}
      </label>
      <span style={{ display: "flex" }}>
        {props.countryCode && (
          <span style={{ flex: "1", padding: "8px" }}>
            ({props.countryCode.countryCode})
          </span>
        )}
        <span style={{ flex: "1", width: "300px" }}>
          <input className="text-input" {...field} {...props} />
        </span>
      </span>
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default PhoneTextInput;
