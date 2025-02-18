Card Management System
This project is a Card Management System built with React, Redux, TypeScript, and Tailwind CSS. It allows users to manage credit and debit cards, view transactions, and add new cards with validations.

Features
View Transactions: Click to show all transactions.

Card Details: Manage and view saved credit and debit cards.

Add Card: Add new credit or debit cards with validations.

Toggle Card Number: Show or hide the full card number.

Lock/Unlock Card: Lock or unlock a card.

Tech Stack
React: JavaScript library for building user interfaces.

Redux: State management library for JavaScript apps.

TypeScript: Superset of JavaScript for static type checking.

Tailwind CSS: Utility-first CSS framework for styling.

Installation
Clone the repository:

bash
git clone https://github.com/your-username/card-management-system.git
Navigate to the project directory:

bash
cd card-management-system
Install dependencies:

bash
npm install
Usage
Start the development server:

bash
npm start
Open your browser and navigate to http://localhost:3000.

Project Structure
src/
├── components/
│ ├── AddCardModal.tsx
├── store/
│ ├── cardsSlice.ts
│ ├── transactionsSlice.ts
│ ├── store.ts
├── pages/
│ ├── Cards.tsx
├── App.tsx
├── index.tsx
└── main.tsx
Components
Cards Component
Tabs: Allows users to switch between viewing transactions, credit cards, and debit cards.

Transactions: Initially shows a button to display all transactions; shows a list of all transactions upon clicking.

Credit Cards & Debit Cards: Separates and renders credit and debit cards in respective tabs.

Card Actions: Includes buttons for showing/hiding the card number and locking/unlocking cards.

AddCardModal Component
Form Fields: Includes fields for card details like name, bank name, card type, card number, validity, and CVV.

Validations: Ensures that all required fields are correctly filled out, including checking the card number format and future date for validity.

Checkbox Options: Options to set the card as default and add the card to Google Pay.

Error Handling: Displays errors if validations are not met.

Store Configuration
cardsSlice: Manages state for card details and includes actions for adding new cards.

transactionsSlice: Manages state for transaction details and includes actions for adding transactions.

store.ts: Configures and combines the slices into the Redux store.

Adding a New Card
Click the "+ Add Card" button.

Fill out the form with the card details.

Submit the form to add the card to the saved cards list.

Viewing Transactions
Click the "Transactions" tab.

Click the "Show All Transactions" button to view the list of all transactions.

Viewing Cards
Click the "Credit Cards" or "Debit Cards" tab to view the respective cards.

Use the buttons on each card to show/hide the card number or lock/unlock the card.
