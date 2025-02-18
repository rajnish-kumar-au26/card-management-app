import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import { MenuProvider } from "./contexts/MenuContexts";

const App: React.FC = () => {
  return (
    <MenuProvider>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col h-screen">
            <Header />
            <div className="flex-1 p-4 overflow-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </MenuProvider>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import CardPage from "./branch/CardPage";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-4">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/cards" element={<CardPage />} />
//             <Route path="/transactions" element={<TransactionsPage />} />
//             <Route path="/settings" element={<SettingsPage />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// const HomePage: React.FC = () => <div>Home Page</div>;
// const TransactionsPage: React.FC = () => <div>Transactions Page</div>;
// const SettingsPage: React.FC = () => <div>Settings Page</div>;

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CardPage from "./pages/CardPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<CardPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
