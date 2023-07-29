import Landing from "./pages/Landing";
import Footer from "./components/Card/CardInformasi";
import { Routes, Route, HashRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";

class App extends React.Component {
  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 6000));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        ele.classList.add("available");
        setTimeout(() => {
          ele.outerHTML = "";
        }, 2000);
      }
    });
  }

  render() {
    return (
      <>
        <HashRouter>
          {/* <ScrollToTop /> */}
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="/tentang" element={<Tentang />} />
            <Route path="/Kabinet/:id" element={<Departement />} exact />
            <Route path="/KabarFilkom" element={<KabarFilkom />} />
            <Route path="/Kabinet" element={<Kabinet />} />
            <Route path="/KabarProker" element={<KabarProker />} exact />
            <Route path="/KabarProker/:id" element={<Proker />} /> */}
          </Routes>
        </HashRouter>
      </>
    );
  }
}

export default App;
