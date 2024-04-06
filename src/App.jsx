import axios from "axios";
import "./App.css";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RentFeed from "./components/RentFeed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rentFeed" element={<RentFeed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
