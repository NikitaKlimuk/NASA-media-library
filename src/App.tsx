import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/navbar";
import SearchPage from "./pages/search";
import Footer from "./components/footer";
import ShowPage from "./pages/show";

function App() {
  return (
    <section className="App">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/:nasaId" element={<ShowPage />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
