import React from "react";

const PassengerCount = ({ passengerType, ageLimit }) => {
  return (
    <div className="row gap-sm-5">
      <div className="left col-6">
        <h5>{passengerType}</h5>
        <p className="text-muted">{ageLimit}</p>
      </div>
      <div className="right col-6  d-flex align-items-center justify-content-center">
        <button className="btn btn text-danger fs-5">-</button>
        <input
          type="number"
          className="form-control-sm border-0 no-spinner"
          value="1"
        />
        <button className="btn text-danger fs-5">+</button>
      </div>
    </div>
  );
};

export default PassengerCount;
