import React from "react";
import Refillingreport from "./Makereports/Refillingreport";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Please use another url</div>} />
        <Route path="/refillingreport" element={<Refillingreport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default HomePage;