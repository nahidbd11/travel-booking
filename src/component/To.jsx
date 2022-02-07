import React from "react";
import { MdLocationOn } from "react-icons/md";

const To = () => {
  return (
    <div className="col-12 col-md-4">
      <label htmlFor="to" className="form-label">
        To
      </label>
      <div className="input-group">
        <span className="input-group-text">
          <MdLocationOn />
        </span>
        <select
          className="form-select"
          id="to"
          aria-label="Example select with button addon"
        >
          <option defaultValue="Bd">select destination </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default To;
