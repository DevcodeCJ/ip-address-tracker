import React, { useState, useEffect } from "react";
// CSS
import "./App.css";
// Icons
import { IoIosArrowForward } from "react-icons/io";
// Components
import GeoInfo from "./components/GeoInfo.js";
import Map from "./components/Map";

const apiKey = process.env.REACT_APP_IP_API_KEY;

function App() {
  // UseStates
  const [input, setInput] = useState("");
  const [geoData, setGeoData] = useState("");
  const [counter, setCounter] = useState(1);

  // UseEffects
  useEffect(() => {
    loadDefault();
  }, []);

  useEffect(() => {
    setGeoData("");
  }, [counter]);

  // Functions
  const url = "https://geo.ipify.org/api/v1?apiKey=";

  const loadDefault = () => {
    const endpoint = url + apiKey + "&ipAddress=" + input;

    const getGeoLocation = async () => {
      let response = await fetch(endpoint);
      let data = await response.json();
      return data;
    };

    try {
      getGeoLocation().then((data) => setGeoData(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    loadDefault();
    setInput("");
    setCounter(counter + 1);
  };

  return (
    <div>
      <header>
        <h1>IP address tracker</h1>
        <form className="ip-form">
          <input
            className="input"
            onChange={handleChange}
            value={input}
            placeholder="Enter new IP"
          />
          <button onClick={handleClick} className="submit-btn" type="submit">
            <IoIosArrowForward className="arrow-btn" />
          </button>
        </form>
        <GeoInfo geoData={geoData} />
      </header>
      <main>
        <Map geoData={geoData} />
      </main>
    </div>
  );
}

export default App;
