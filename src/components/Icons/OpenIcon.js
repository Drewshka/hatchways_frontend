import React from "react";
import Open from "../../assets/icons/open.svg";

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
