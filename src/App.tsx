import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/navbar";
import SearchPage from "./pages/search";

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
    <section className="App">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </section>
  );
}

export default App;
