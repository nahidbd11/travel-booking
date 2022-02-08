import React, { useContext } from "react";
import { AppContext } from "./Context";

const RadioButton = () => {
  const { passengerData, setPassengerData } = useContext(AppContext);
  return (
    <div style={{ display: "flex", gap: 55 }}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="journeyType"
          value="oneWay"
          id="flexRadioDefault1"
          onChange={(e) =>
            setPassengerData({ ...passengerData, journeyType: e.target.value })
          }
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          One way
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="journeyType"
          value="roundTrip"
          id="flexRadioDefault1"
          onChange={(e) =>
            setPassengerData({ ...passengerData, journeyType: e.target.value })
          }
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Round trip
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
