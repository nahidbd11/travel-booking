import React, { useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AppContext } from "./Context";
import PassengerModal from "./PassengerModal";
const PassengerTravel = () => {
  const { isPModal, setIsPModal } = useContext(AppContext);
  return (
    <div className="mt-3 passenger_container  col-12 col-md-4">
      <button
        className="btn psbtn d-flex align-items-center gap-5"
        onClick={() => setIsPModal(!isPModal)}
      >
        <span>1passenger,economy</span>
        <BiChevronDown />
      </button>
      {isPModal && <PassengerModal />}
    </div>
  );
};

export default PassengerTravel;
