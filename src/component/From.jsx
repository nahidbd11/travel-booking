import React, { useContext } from "react";
import { MdLocationOn } from "react-icons/md";
import { AppContext } from "./Context";
const From = () => {
  const { setPassengerData, passengerData } = useContext(AppContext);
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
          onChange={(e) =>
            setPassengerData({ ...passengerData, from: e.target.value })
          }
          className="form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
        >
          <option defaultValue="">select departure </option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagoang">Chittagoang</option>
          <option value="shylet">shylet</option>
        </select>
      </div>
    </div>
  );
};

export default From;
