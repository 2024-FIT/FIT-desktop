import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Onbording from "@/pages/onbording/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onbording />} />
        <Route path="/onbording" element={<Onbording />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;