import MainStyles from "./styles/mainStyles";
import "./assets/font/font.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./domains/Login";
import Home from "./domains/Home";
import 'leaflet/dist/leaflet.css';


const App = () => {
  return (
    <>
      <MainStyles />
      <BrowserRouter>
        <Routes>
          {/* Routes goes here . . . */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
