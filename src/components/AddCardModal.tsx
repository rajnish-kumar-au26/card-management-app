import React, { useState } from "react";
import { Card } from "../store/cardsSlice";

interface AddCardModalProps {
  onClose: () => void;
  onSubmit: (card: Card) => void;
}

const AddCardModal: React.FC<AddCardModalProps> = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [bankName, setBankName] = useState("");
  const [type, setType] = useState<"Credit" | "Debit">("Credit");
  const [number, setNumber] = useState("");
  const [validTill, setValidTill] = useState("");
  const [cvv, setCvv] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [inGPay, setInGPay] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (
      name === "" ||
      bankName === "" ||
      number === "" ||
      validTill === "" ||
      cvv === "" ||
      !/^\d{16}$/.test(number)
    ) {
      setError("Please fill out all required fields correctly.");
      return;
    }

    const newCard = {
      id: Date.now().toString(),
      name,
      bankName,
      type,
      number,
      validTill,
      cvv,
      isDefault,
      inGPay,
    };

    onSubmit(newCard);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add New Card
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={35}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Bank Name:</label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Card Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as "Credit" | "Debit")}
              className="border border-gray-300 p-2 rounded w-full"
              required
            >
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Card Number:</label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              maxLength={16}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Valid Till:</label>
            <input
              type="text"
              value={validTill}
              onChange={(e) => setValidTill(e.target.value)}
              placeholder="MM/YYYY"
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">CVV:</label>
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength={3}
              className="border border-gray-300 p-2 rounded w-full"
              required
            />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            checked={isDefault}
            onChange={(e) => setIsDefault(e.target.checked)}
            className="mr-2"
          />
          <label className="text-gray-700">Set Card as Default</label>
        </div>
        <div className="flex items-center mt-4 mb-6">
          <input
            type="checkbox"
            checked={inGPay}
            onChange={(e) => setInGPay(e.target.checked)}
            className="mr-2"
          />
          <label className="text-gray-700">Add this card to GPay</label>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="p-2 bg-red-500 text-white mr-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="p-2 bg-green-500 text-white rounded"
            onClick={handleSubmit}
          >
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;
