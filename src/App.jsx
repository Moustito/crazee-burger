import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/pages/login/LoginPages";
import OrderPage from "./Components/pages/order/OrderPage";
import ErrorPage from "./Components/pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
