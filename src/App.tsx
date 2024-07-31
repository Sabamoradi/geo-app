import MainStyles from "./styles/mainStyles";
import "./assets/font/font.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./domains/Login";

const App = () => {
  return (
    <>
      <MainStyles />
      <BrowserRouter>
        <Routes>
          {/* Routes goes here . . . */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
