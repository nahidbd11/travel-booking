import React, { useContext } from "react";
import PassengerCount from "./PassengerCount";
import { AppContext } from "./Context";
const PassengerModal = () => {
  const { passengerData, setPassengerData } = useContext(AppContext);
  return (
    <div className="psmodal">
      <div className="modalcontent">
        {/* TODO:select class */}
        <div className="modalheader">
          <h5>Travel Class</h5>
          <div className="travelclass">
            <select
              className="form-select  p-3 mb-3"
              onChange={(e) =>
                setPassengerData({
                  ...passengerData,
                  travelClass: e.target.value,
                })
              }
            >
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
            {passengerData["passdata"].map((passenger) => {
              const { passengerType, ageLimit, num, id } = passenger;
              return (
                <PassengerCount
                  {...{ passengerType, ageLimit, num, id }}
                  key={id}
                />
              );
            })}
          </div>
        </div>
        {/* TODO:Done button hide psmodal */}
        <button
          className="btn btn-outline-danger"
          onClick={() =>
            setPassengerData({ ...passengerData, isPModal: false })
          }
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default PassengerModal;
