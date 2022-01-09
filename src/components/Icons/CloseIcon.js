import React from "react";
import Close from "../../assets/icons/close.svg";

//please note:  I did not write the pathing myself.  I took an svg icon and converted it to react.
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
