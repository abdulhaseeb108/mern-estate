import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-600">Real</span>
            <span className="text-gray-800">Estate</span>
          </h1>
        </Link>
        <form className="bg-gray-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-24 sm:w-64"
          />
          <FaSearch className="text-gray-600 ml-2" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700  hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700  hover:underline">
              About
            </li>
          </Link>
          <Link to="/Signin">
            <li className="text-slate-700  hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
