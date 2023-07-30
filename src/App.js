import Landing from "./pages/Landing";
import Footer from "./components/Card/CardInformasi";
import Informasi from "./pages/Informasi";
import Wisata from "./pages/Wisata";
import UMKM from "./pages/UMKM";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
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
            <Route path="/informasi" element={<Informasi />} />
            <Route path="/umkm" element={<UMKM />} />
            <Route path="/wisata" element={<Wisata />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Detail/:status" element={<Detail />} />
          </Routes>
        </HashRouter>
      </>
    );
  }
}

export default App;
