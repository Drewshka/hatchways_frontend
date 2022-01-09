import React from "react";
import Close from "../../assets/icons/close.svg";

const CloseIcon = ({ setShowGrades, showGrades }) => {
  return (
    <img
      src={Close}
      alt="close-icon"
      onClick={() => {
        setShowGrades(!showGrades);
      }}
    />
  );
};

export default CloseIcon;
