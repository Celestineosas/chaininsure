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

const AppRoutes = () => {
  return (
    <main className="max-container">

      <Navbar />

      <Routes>
        
        <Route path="/" element={<Auth />}>
          <Route index element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <AuthCheck>
              <Dashboard />
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
