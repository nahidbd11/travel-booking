import React from "react";

const VoucherEvnt = () => {
  return (
    <div className="col-12 col-md-4">
      <label htmlFor="voucher">Voucher or event code</label>
      <input type="text" className="form-control" id="voucher" />
    </div>
  );
};

export default VoucherEvnt;
