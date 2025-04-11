import { useState } from "react";
import NavbarComponent from "./Component/NavbarComponent";
import MeteocittàComponent from "./Component/MeteocittàComponent";
import RicercaComponent from "./Component/RicercaComponent";
import FooterImg from "./Component/FooterImg";
import Dettagli from "./Component/Dettagli";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/myCss.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="Blue vh-100">
        <NavbarComponent />
        <RicercaComponent />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MeteocittàComponent città="Milano" />{" "}
                  <MeteocittàComponent città="Rome" />{" "}
                  <MeteocittàComponent città="Napoli" />
                  <MeteocittàComponent città="Crotone" />
                  <MeteocittàComponent città="Barcellona" />
                </>
              }
            />
            <Route path="/dettagli/:nomeCitta" element={<Dettagli />} />
          </Routes>

          <FooterImg />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
