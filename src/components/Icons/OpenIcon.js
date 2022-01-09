import React from "react";
import Open from "../../assets/icons/open.svg";

//please note:  I did not write the pathing myself.  I took an svg icon and converted it to react.
const OpenIcon = ({ setShowGrades, showGrades }) => {
  return (
    <img
      src={Open}
      alt="close-icon"
      onClick={() => {
        setShowGrades(!showGrades);
      }}
    />
  );
};

export default OpenIcon;
