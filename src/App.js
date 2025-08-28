import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Servicos from "./pages/Serviços";
import Clientes from "./pages/Clientes";
import Contato from "./pages/Contato";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <QuemSomos />
        <Servicos />
        <Clientes />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
