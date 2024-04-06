import axios from "axios";
import React, { useEffect } from "react";

function RentFeed() {
  useEffect(() => {
    axios.get("https://neutrino-dev.com/api/Brands").then(function (response) {
      console.log(response.data.data);
    });
  }, []);

  return (
    <div>
      <h1>rentfeed</h1>
    </div>
  );
}

export default RentFeed;
