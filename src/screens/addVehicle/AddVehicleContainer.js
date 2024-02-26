import React from "react";

import { useNavigation } from "@react-navigation/native";

import AddVehicleScreen from "./AddVehicleScreen";

const AddVehicleContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <AddVehicleScreen navigate={navigate} />;
};

export default AddVehicleContainer;
