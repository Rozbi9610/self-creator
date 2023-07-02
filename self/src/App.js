import {Route, Routes} from "react-router-dom"
import Home from './View/Home';
import Self from "./View/Self";
import ScoS from "./View/ScoS";
import ScoX from "./View/ScoX";
import ScoCH from './View/ScoCH';


function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/self" element={<Self/>} />
    <Route path="/self/s" element={<ScoS/>} />
    <Route path="/self/x" element={<ScoX/>} />
    <Route path="/self/ch" element={<ScoCH/>} />
  </Routes>

  );
}

export default App;
