import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  const apiUrl = "https://images-api.nasa.gov/search?q=space";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.collection.items;
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
