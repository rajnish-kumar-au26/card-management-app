import React from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { useMenu } from "../contexts/MenuContexts";

const Header: React.FC = () => {
  const { menuName } = useMenu();

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <FaBars className="w-6 h-6 mr-3" />
        <span className="font-semibold text-xl">{menuName}</span>
      </div>
      <div className="flex items-center">
        <FaUserCircle className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Header;
