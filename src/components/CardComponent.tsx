import React from "react";
import {
  FaLock,
  FaArchive,
  FaCheckCircle,
  FaGoogleWallet,
  FaEye,
} from "react-icons/fa";

import bankLogo from "../assets/hdfc.jpeg";
import cardTypeLogo from "../assets/master.png";

interface CardProps {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  isLocked: boolean;
  onLockToggle: () => void;
  onArchive: () => void;
  onSetDefault: () => void;
  onAddToGPay: () => void;
  onShowCardNumber: () => void;
  showFullNumber: boolean;
}

const CardComponent: React.FC<CardProps> = ({
  cardNumber,
  cardHolder,
  expiryDate,
  isLocked,
  onLockToggle,
  onArchive,
  onSetDefault,
  onAddToGPay,
  onShowCardNumber,
  showFullNumber,
}) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-lg w-[750px]">
      <div className="bg-[#0c2340] text-white p-5 rounded-lg w-2/3 shadow-md">
        <button
          className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white mb-3"
          onClick={onShowCardNumber}
        >
          <FaEye /> <span>Show Card Number</span>
        </button>

        <img src={bankLogo} alt="Bank Logo" className="w-16 mb-2" />

        <div className="text-xl font-semibold">{cardHolder}</div>
        <div className="text-2xl font-bold tracking-wider my-2">
          {showFullNumber
            ? cardNumber
            : `••••  ••••  ••••  ${cardNumber.slice(-4)}`}
        </div>

        <div className="flex justify-between text-sm text-gray-300">
          <div>Valid Till: {expiryDate}</div>
          <div>CVV: ***</div>
        </div>

        <div className="flex justify-end mt-4">
          <img src={cardTypeLogo} alt="Card Type" className="w-10" />
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg w-1/3 ml-4">
        <div className="grid grid-cols-2 gap-3">
          <button
            className="flex flex-col items-center justify-center bg-blue-500 text-white p-3 rounded-lg w-24"
            onClick={onLockToggle}
          >
            <FaLock className="mb-1" />
            <span className="text-xs">{isLocked ? "Unlock" : "Lock"}</span>
          </button>

          <button
            className="flex flex-col items-center justify-center bg-gray-500 text-white p-3 rounded-lg w-24"
            onClick={onArchive}
          >
            <FaArchive className="mb-1" />
            <span className="text-xs">Archive</span>
          </button>

          <button
            className="flex flex-col items-center justify-center bg-green-500 text-white p-3 rounded-lg w-24"
            onClick={onSetDefault}
          >
            <FaCheckCircle className="mb-1" />
            <span className="text-xs">Set Default</span>
          </button>

          <button
            className="flex flex-col items-center justify-center bg-purple-500 text-white p-3 rounded-lg w-24"
            onClick={onAddToGPay}
          >
            <FaGoogleWallet className="mb-1" />
            <span className="text-xs">Add to GPay</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
