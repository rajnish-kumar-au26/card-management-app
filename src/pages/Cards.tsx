import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Card, addCard } from "../store/cardsSlice";
import AddCardModal from "../components/AddCardModal";

const Cards: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<
    "transactions" | "credit-cards" | "debit-cards"
  >("transactions");
  const [showTransactions, setShowTransactions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards.cards);
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  const handleAddCard = (card: Card) => {
    dispatch(addCard(card));
    setShowModal(false);
  };

  const [showFullNumber, setShowFullNumber] = useState<Record<string, boolean>>(
    {}
  );
  const [lockedCards, setLockedCards] = useState<Record<string, boolean>>({});

  const toggleShowFullNumber = (cardId: string) => {
    setShowFullNumber((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const toggleLockCard = (cardId: string) => {
    setLockedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const filterCardsByType = (type: "Credit" | "Debit") => {
    return cards.filter((card) => card.type === type);
  };

  return (
    <div className="flex flex-col p-4 border rounded-lg">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          <button
            className={`p-2 rounded ${
              selectedTab === "transactions"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedTab("transactions")}
          >
            Transactions
          </button>
          <button
            className={`p-2 rounded ${
              selectedTab === "credit-cards"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedTab("credit-cards")}
          >
            Credit Cards
          </button>
          <button
            className={`p-2 rounded ${
              selectedTab === "debit-cards"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedTab("debit-cards")}
          >
            Debit Cards
          </button>
        </div>
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => setShowModal(true)}
        >
          + Add Card
        </button>
      </div>
      {selectedTab === "transactions" && (
        <div className="w-full p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Transactions</h2>
          {!showTransactions ? (
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={() => setShowTransactions(true)}
            >
              Show All Transactions
            </button>
          ) : (
            transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="p-2 border-b border-gray-200"
              >
                <p>{transaction.description}</p>
                <p>{transaction.date}</p>
                <p
                  className={
                    transaction.type === "debit"
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {transaction.amount} $
                </p>
              </div>
            ))
          )}
        </div>
      )}
      {selectedTab === "credit-cards" && (
        <div className="w-full p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Credit Cards</h2>
          {filterCardsByType("Credit").map((card) => (
            <div
              key={card.id}
              className="p-2 border-b border-gray-200 flex justify-between items-center"
            >
              <div>
                <p>{card.name}</p>
                <p>{card.bankName}</p>
                <p>{card.type}</p>
                <p>
                  {showFullNumber[card.id]
                    ? card.number
                    : `**** **** **** ${card.number.slice(-4)}`}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="p-2 bg-green-500 text-white rounded"
                  onClick={() => toggleShowFullNumber(card.id)}
                >
                  {showFullNumber[card.id] ? "Hide" : "Show"} Card Number
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded"
                  onClick={() => toggleLockCard(card.id)}
                >
                  {lockedCards[card.id] ? "Unlock" : "Lock"} Card
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedTab === "debit-cards" && (
        <div className="w-full p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Debit Cards</h2>
          {filterCardsByType("Debit").map((card) => (
            <div
              key={card.id}
              className="p-2 border-b border-gray-200 flex justify-between items-center"
            >
              <div>
                <p>{card.name}</p>
                <p>{card.bankName}</p>
                <p>{card.type}</p>
                <p>
                  {showFullNumber[card.id]
                    ? card.number
                    : `**** **** **** ${card.number.slice(-4)}`}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="p-2 bg-green-500 text-white rounded"
                  onClick={() => toggleShowFullNumber(card.id)}
                >
                  {showFullNumber[card.id] ? "Hide" : "Show"} Card Number
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded"
                  onClick={() => toggleLockCard(card.id)}
                >
                  {lockedCards[card.id] ? "Unlock" : "Lock"} Card
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {showModal && (
        <AddCardModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddCard}
        />
      )}
    </div>
  );
};

export default Cards;
