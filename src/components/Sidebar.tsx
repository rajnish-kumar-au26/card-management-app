import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCreditCard,
  FaExchangeAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useMenu } from "../contexts/MenuContexts";

const Sidebar: React.FC = () => {
  const { setMenuName } = useMenu();
  return (
    <div className="w-64 h-screen bg-sky-800 text-white flex flex-col justify-between">
      <div className="p-4">
        <img
          src="https://www.girirajdigital.com/media/irtpaev1/gd.png"
          alt="Company Logo"
          className="mb-4 w-full"
        />
        <p className="text-sm mb-4">
          Software & Web Development <br />
          Company Umbraco-Gold Partner
        </p>
        <Link
          to="/"
          className="flex items-center p-2 hover:bg-sky-700 rounded"
          onClick={() => setMenuName("Home")}
        >
          <FaHome className="w-6 h-6 mr-3" /> Home
        </Link>
        <Link
          to="/cards"
          className="flex items-center p-2 hover:bg-sky-700 rounded"
          onClick={() => setMenuName("Cards")}
        >
          <FaCreditCard className="w-6 h-6 mr-3" /> Cards
        </Link>
        <Link
          to="/transactions"
          className="flex items-center p-2 hover:bg-sky-700 rounded"
          onClick={() => setMenuName("Transactions")}
        >
          <FaExchangeAlt className="w-6 h-6 mr-3" /> Transactions
        </Link>
        <Link
          to="/settings"
          className="flex items-center p-2 hover:bg-sky-700 rounded"
          onClick={() => setMenuName("Settings")}
        >
          <FaCog className="w-6 h-6 mr-3" /> Settings
        </Link>
      </div>
      <div className="p-4">
        <button className="flex items-center p-2 bg-red-600 hover:bg-red-700 rounded w-full">
          <FaSignOutAlt className="w-6 h-6 mr-3" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
