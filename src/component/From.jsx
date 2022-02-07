import React from "react";
import { MdLocationOn } from "react-icons/md";
const From = () => {
  return (
    <div className="col-12 col-md-4">
      <label htmlFor="departure" className="form-label">
        From
      </label>
      <div className="input-group">
        <span className="input-group-text">
          <MdLocationOn />
        </span>
        <select
          className="form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
        >
          <option defaultValue="">select departure </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default From;
