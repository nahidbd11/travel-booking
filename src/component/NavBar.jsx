import React from "react";

function NavBar({ month, onPreviousClick, onNextClick, className }) {
  return (
    <div className={className} style={{ margin: "2rem" }}>
      {!(
        month.getMonth() === new Date().getMonth() &&
        month.getYear() === new Date().getYear()
      ) && (
        <button
          style={{
            float: "left",
          }}
          onClick={() => onPreviousClick()}
        >
          ←
        </button>
      )}

      <button onClick={() => onNextClick()} style={{ float: "right" }}>
        →
      </button>
    </div>
  );
}

export default NavBar;
