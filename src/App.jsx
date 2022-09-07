import { useState } from "react";
import "./index.css";

import { Header, Footer } from "./components";
import { Home } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
