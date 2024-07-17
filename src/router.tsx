import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Onbording from "@/pages/onbording/index";
import Login from '@/pages/login/index'
import Signup from '@/pages/signup/index'
import MainPage from "@/pages/main/index"
import Profile from "@/pages/profile/index"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onbording />} />
        <Route path="/onbording" element={<Onbording />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;