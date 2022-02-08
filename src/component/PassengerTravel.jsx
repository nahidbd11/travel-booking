import React, { useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AppContext } from "./Context";
import PassengerModal from "./PassengerModal";
const PassengerTravel = () => {
  const { passengerData, setPassengerData } = useContext(AppContext);
  return (
    <div className="passenger_container  col-12 col-md-4">
      <label>Passenger/Travel Class</label>
      <div className="input-group">
        <button
          className="btn psbtn d-flex align-items-center gap-2"
          onClick={() =>
            setPassengerData({
              ...passengerData,
              isPModal: !passengerData.isPModal,
            })
          }
        >
          <span>{passengerData.total} passenger,</span>
          <span>{passengerData.travelClass}</span>
          <BiChevronDown />
        </button>
        {passengerData.isPModal && <PassengerModal />}
      </div>
    </div>
  );
};

export default PassengerTravel;
