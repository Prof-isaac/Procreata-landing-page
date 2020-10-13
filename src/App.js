import React from "react";
//import logo from "./logo.svg";
import "./App.css";

//------------------------- ------------------//
import HomePage from "./components/home_page/HomePage";
import Footer from "./components/page_footer/Footer";
import NavBar from "./components/nav_bar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="App-main">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
