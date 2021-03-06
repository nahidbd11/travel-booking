import React, { useContext } from "react";
import { AppContext } from "./Context";
import DepartureReturn from "./DepartureReturn";
import FromtoComp from "./FromToComp";
import Modal from "./Modal";
import PassengerTravel from "./PassengerTravel";
import RadioButton from "./RadioButton";
import VoucherEvnt from "./VoucherEvnt";

function Form() {
  const { handleSubmit } = useContext(AppContext);
  return (
    <div className="formWrapper">
      <h1>Flight deals with Virgin Atlantic</h1>
      <form action="" onSubmit={handleSubmit}>
        <RadioButton />
        <div className="row">
          <FromtoComp type="from" />
          <FromtoComp type="to" />
          <DepartureReturn />
        </div>
        <div className="row">
          <PassengerTravel />
          <VoucherEvnt />
          <button
            type="submit"
            className="btn btn-danger btn-sm col-md-4 col-12 mt-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book now
          </button>
        </div>
        {/* TODO:Modal will display all form input */}
        <Modal />
      </form>
    </div>
  );
}

export default Form;
