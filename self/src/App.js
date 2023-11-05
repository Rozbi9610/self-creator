import {Route, Routes} from "react-router-dom"
import Home from './View/Home';
import Home2 from './View/Home2';
import Self from "./View/Self";
import ScoS from "./View/ScoS";
import ScoX from "./View/ScoX";
import ScoCH from './View/ScoCH';
import JoyM from "./View/JoyM";
import JoyK from './View/JoyK';


function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/2" element={<Home2/>} />
    <Route path="/self" element={<Self/>} />
    <Route path="/joym" element={<JoyM/>} />
    <Route path="/joyk" element={<JoyK/>} />
    <Route path="/self/s" element={<ScoS/>} />
    <Route path="/self/x" element={<ScoX/>} />
    <Route path="/self/ch" element={<ScoCH/>} />
  </Routes>

  );
}

export default App;
