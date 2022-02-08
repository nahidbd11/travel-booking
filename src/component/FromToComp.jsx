import React, { useContext } from "react";
import { MdLocationOn } from "react-icons/md";
import { AppContext } from "./Context";
const FromtoComp = ({ type }) => {
  const { setPassengerData, passengerData } = useContext(AppContext);
  return (
    <div className="col-12 col-md-4">
      <label className="form-label">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </label>
      <div className="input-group">
        <span className="input-group-text">
          <MdLocationOn />
        </span>
        <select
          onChange={(e) =>
            setPassengerData({ ...passengerData, [type]: e.target.value })
          }
          className="form-select"
        >
          <option defaultValue="">
            select {type === "from" ? "departure" : "destination"}
          </option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagoang">Chittagoang</option>
          <option value="shylet">shylet</option>
        </select>
      </div>
    </div>
  );
};

export default FromtoComp;
