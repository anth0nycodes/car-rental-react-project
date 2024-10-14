import React, { useEffect } from "react";
import ModelHero from "../components/ModelHero";
import VehicleModels from "../components/VehicleModels";
import Booking from "../components/Booking";
import { useState } from "react";
import axios from "axios";
import SuccessPopup from "../components/ui/SuccessPopup";

const Models = () => {
  const [carModels, setCarModels] = useState([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

  const fetchVehicleModels = async () => {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car"
    );

    const models = data.data;
    setCarModels(models);
  };

  useEffect(() => {
    fetchVehicleModels();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SuccessPopup successOpen={successOpen} />
      <Booking
        carModels={carModels}
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        setSuccessOpen={setSuccessOpen}
      />
      <ModelHero />
      <VehicleModels
        carModels={carModels}
        setCarModels={setCarModels}
        setBookingOpen={setBookingOpen}
        setSelectedModel={setSelectedModel}
      />
    </>
  );
};

export default Models;
