import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Header from "./Components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
