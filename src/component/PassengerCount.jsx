import React, { useContext, useRef } from "react";
import { AppContext } from "./Context";

const PassengerCount = ({ passengerType, ageLimit, num, id }) => {
  const { PassengerNumInc, PassengerNumDec, handlePassengerChange } =
    useContext(AppContext);
  const inputRef = useRef(null);
  return (
    <div className="row gap-sm-5">
      <div className="left col-6">
        <h5>{passengerType}</h5>
        <p className="text-muted">{ageLimit}</p>
      </div>
      <div className="right col-6  d-flex align-items-center justify-content-center">
        <button
          className="btn btn text-danger fs-3"
          onClick={() => PassengerNumDec(id)}
        >
          -
        </button>
        <input
          ref={inputRef}
          type="number"
          className="form-control-sm border-0 no-spinner"
          value={num}
          min="0"
          onChange={(e) => handlePassengerChange(id, e.target.value)}
        />
        <button
          className="btn text-danger fs-5"
          onClick={() => PassengerNumInc(id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PassengerCount;
