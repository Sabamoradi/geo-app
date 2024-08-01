import MainStyles from "./styles/mainStyles";
import "./assets/font/font.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./domains/Login";
import Home from "./domains/Home";
import "leaflet/dist/leaflet.css";
import MainLayout from "./layouts/Main";

const App = () => {
  return (
    <>
      <MainStyles />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {/* Routes goes here . . . */}
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
