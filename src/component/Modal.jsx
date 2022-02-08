import React, { useContext } from "react";
import { AppContext } from "./Context";

const Modal = () => {
  const { passengerData } = useContext(AppContext);
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Booking Details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="info">
              <span className="fw-normal text-primary">From:</span>
              <span className="text-muted"> {passengerData.from}</span>
            </div>
            <div className="info">
              <span className="fw-normal text-primary">to:</span>
              <span className="text-muted"> {passengerData.to}</span>
            </div>
            <div className="info">
              <span className="fw-normal text-primary">Departure Date:</span>
              <span className="text-muted"> {passengerData.departureday}</span>
            </div>
            <div className="info">
              <span className="fw-normal text-primary">Return Date:</span>
              <span className="text-muted"> {passengerData.returnday}</span>
            </div>
            <div className="info">
              <span className="fw-normal text-primary">Total passengers:</span>
              <span className="text-muted"> {passengerData.total}</span>
            </div>
            <div className="info">
              <span className="fw-normal text-primary">journey type:</span>
              <span className="text-muted"> {passengerData.journeyType}</span>
            </div>
          </div>

          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
