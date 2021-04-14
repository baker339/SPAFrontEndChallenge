import React, { useState } from "react";
import ColorAutoCompleteField from "./ColorAutoCompleteField";
import Colors from "../models/Colors";

import { useField, useFormikContext } from "formik";

const ColorSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const formik = useFormikContext();

  const [selectedColor, setSelectedColor] = useState(
    formik.values.favoriteColor !== "" ? formik.values.favoriteColor : null
  );

  const onSelectColor = (event) => {
    setSelectedColor(event.target.value);
    if (event.target.value !== "Other") {
      formik.values.favoriteColor = event.target.value;
    }
  };

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        onChange={onSelectColor}
        value={selectedColor}
      >
        <option>Select Color</option>
        {Colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      {selectedColor === "Other" && (
        <ColorAutoCompleteField setColor={onSelectColor} />
      )}
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default ColorSelect;
