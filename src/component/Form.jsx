import React, { useContext } from "react";
import { AppContext } from "./Context";
import DepartureReturn from "./DepartureReturn";
import From from "./From";
import Modal from "./Modal";
import PassengerTravel from "./PassengerTravel";
import RadioButton from "./RadioButton";
import To from "./To";
import VoucherEvnt from "./VoucherEvnt";

function Form() {
  const { handleSubmit } = useContext(AppContext);
  return (
    <div className="formWrapper">
      <h1>Flight deals with Virgin Atlantic</h1>
      <form action="" onSubmit={handleSubmit}>
        <RadioButton />
        <div className="row">
          <From />
          <To />
          <DepartureReturn />
        </div>
        <div className="row">
          <PassengerTravel />
          <VoucherEvnt />
          <button
            type="submit"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book now
          </button>
        </div>
        {/* TODO:Modal */}
        <Modal />
      </form>
    </div>
  );
}

export default Form;
