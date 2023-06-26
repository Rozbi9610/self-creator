import {Route, Routes} from "react-router-dom"
import Home from "./View/Home"
import ScoS from "./View/ScoS";
import ScoX from "./View/ScoX";

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sco_s" element={<ScoS/>} />
    <Route path="/sco_x" element={<ScoX/>} />
  </Routes>

  );
}

export default App;
