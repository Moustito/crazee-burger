import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/pages/login/LoginPages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/order" element={<OrderPage />} /> */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
