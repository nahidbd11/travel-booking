import React, { useContext } from "react";
import { MdLocationOn } from "react-icons/md";
import { AppContext } from "./Context";

const To = () => {
  const { setPassengerData, passengerData } = useContext(AppContext);
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
          onChange={(e) =>
            setPassengerData({ ...passengerData, to: e.target.value })
          }
          className="form-select"
          id="to"
          aria-label="Example select with button addon"
        >
          <option value="">select destination </option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagoang">Chittagoang</option>
          <option value="shylet">shylet</option>
        </select>
      </div>
    </div>
  );
};

export default To;
