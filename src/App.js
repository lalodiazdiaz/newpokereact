import Home from "./Components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
