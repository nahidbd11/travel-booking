import React from "react";
import PassengerCount from "./PassengerCount";
import data from "./data";
const PassengerModal = () => {
  return (
    <div className="psmodal">
      <div className="modalcontent">
        <div class="modalheader">
          <h5>Travel Class</h5>
          {/* TODO:select class */}
          <div className="travelclass">
            <select class="form-select  p-3 mb-3">
              <option defaultValue="economy">economy</option>
              <option value="premium">premium</option>
              <option value="upperclass">upperclass</option>
            </select>
            <hr />
          </div>
        </div>
        {/* TODO:Passenger count section */}
        <div className="modalbody">
          <h5>Passengers</h5>
          <div className="pscount">
            {data.map((passenger) => {
              const { passengerType, ageLimit } = passenger;
              return <PassengerCount {...{ passengerType, ageLimit }} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerModal;
