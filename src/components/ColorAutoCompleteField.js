import React, { useState } from "react";
import { Hint } from "react-autocomplete-hint";
import { useFormikContext } from "formik";
import AutofillColors from "../models/AutofillColors";

function ColorAutoCompleteField({ ...props }) {
  const formik = useFormikContext();
  const [hintData, setHintData] = useState(AutofillColors);
  const [text, setText] = useState(
    formik.values.favoriteColor === "" ? formik.values.favoriteColor : ""
  );

  const handleOnBlur = (e) => {
    formik.values.favoriteColor = e.target.value;
  };

  return (
    <div>
      <Hint options={hintData} allowTabFill>
        <input
          className="input-with-hint"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={(e) => handleOnBlur(e)}
        />
      </Hint>
    </div>
  );
}

export default ColorAutoCompleteField;
