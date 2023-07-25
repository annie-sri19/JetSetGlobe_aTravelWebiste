import React from "react";
import { Route, Routes } from "react-router-dom";
import { Traveldata } from "./Traveldata";
import { TravelDetails } from "./TravelDetails";
import { AboutAnushka } from "./AboutAnushka";
export const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Traveldata />} />
        <Route path="/details" element={<TravelDetails />} />
        <Route path="/aboutAnushka" element={<AboutAnushka />}/>
      </Routes>
    </div>
  );
};
