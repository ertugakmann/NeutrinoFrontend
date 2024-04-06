import axios from "axios";
import "./App.css";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

function App() {
  axios.get("https://neutrino-dev.com/api/customers").then(function (response) {
    console.log(response);
  });

  return (
    <>
      <Navbar />
      <Herosection />
    </>
  );
}

export default App;
