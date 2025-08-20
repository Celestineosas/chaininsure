import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Dashboard from "./pages/Dsahboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";

const AppRoutes = () => {


  return (
    <main className="max-container">
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

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
