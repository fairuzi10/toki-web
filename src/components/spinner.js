import React from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = () => (
  <div className="text-center">
    <FontAwesomeIcon icon={faCircleNotch} size="5x" spin />
  </div>
);
export default Spinner;
