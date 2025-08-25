import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Dashboard from "./pages/Dsahboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Claims from "./pages/Claims/Claims";
import AuthCheck from "./components/AuthCheck/AuthCheck";
import Auth from "./pages/Auth/Auth";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TicketDashboard from "./pages/TicketDashboard/TicketDashboard";
import Check from "./pages/Check/Check";

const AppRoutes = () => {
  return (
    <main className="max-container bg-background-main">

      <Navbar />

      <Routes>

        <Route path="/" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/check"
          element={
            <AuthCheck>
              <Check />
            </AuthCheck>
          }
        />

        <Route
          path="/dashboard"
          element={
            <AuthCheck>
              <Dashboard />
            </AuthCheck>
          }
        />

        <Route
          path="/tickets"
          element={
            <AuthCheck>
              <TicketDashboard />
            </AuthCheck>
          }
        />
      </Routes>


    </main>
  );
};

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppRoutes />
    </Provider>

  </BrowserRouter>
);

export default App;
