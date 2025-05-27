import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-500 text-white p-4">Tailwind CSS is working!</div>
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
