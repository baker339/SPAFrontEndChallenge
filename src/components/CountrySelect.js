import React, { useState } from "react";
import * as _ from "underscore";

import { useField, useFormikContext } from "formik";

const CountrySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const formik = useFormikContext();

  const [selectedCountry, setSelectedCountry] = useState(
    formik.values.country !== "" ? formik.values.country : null
  );
  const [selectedFlag, setSelectedFlag] = useState(
    formik.values.country !== ""
      ? _.where(props.countries, { name: formik.values.country })[0].flag
      : null
  );

  const onSelectCountry = (event) => {
    if (event.target.value !== "") {
      setSelectedCountry(event.target.value);
      setSelectedFlag(
        _.where(props.countries, { name: event.target.value })[0].flag
      );
      props.setCountryCode({
        countryCode: _.where(props.countries, { name: event.target.value })[0]
          .callingCodes,
      });
      formik.values.country = event.target.value;
    }
  };

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        onChange={onSelectCountry}
        value={selectedCountry}
      >
        <option value="">Select Country</option>
        {props.countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
      {selectedFlag && <img src={selectedFlag} alt={selectedCountry} />}
    </>
  );
};

export default CountrySelect;
