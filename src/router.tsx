import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Onbording from "@/pages/onbording/index";
import Info from '@/pages/info/index'
import MainPage from "@/pages/main/index"
import Profile from '@/pages/profile/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onbording />} />
        <Route path="/onbording" element={<Onbording />} />
        <Route path="/info" element={<Info />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;