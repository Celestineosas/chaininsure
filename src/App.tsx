import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Dashboard from "./pages/Dsahboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Claims from "./pages/Claims/Claims";

const AppRoutes = () => {


  return (
    <main className="max-container">
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/Governance" element={<Claims />} />
        <Route path="/pools" element={<Claims />} />

      </Routes>


    </main>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
