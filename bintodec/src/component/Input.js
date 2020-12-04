import React from "react";
import PropTypes from "prop-types";

const Input = ({ inputBin, handleBinaryInput }) => {
  return (
    <div className="input">
      <input
        name="binarynum"
        type="text"
        minLength="1"
        maxLength="8"
        value={inputBin.value}
        onChange={(e) => handleBinaryInput(e)}
        autoFocus
      />
    </div>
  );
};

Input.prototype = {
  value: PropTypes.number,
};

export default Input;
