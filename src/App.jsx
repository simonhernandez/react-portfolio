import { useState } from "react";
import "./index.css";

import { Header, Footer } from "./components";
import { Home } from "./pages";

function App() {

  return (
    <div className="font-ubuntu_mono dark:text-white">
      <Header />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
