import React from "react";
import { useParams, useLocation } from "react-router-dom";

const VehicleInfoScreen = () => {
  const { state } = useLocation();

  console.log("state: ", state);

  return <div>VehicleInfoScreen</div>;
};

export default VehicleInfoScreen;
