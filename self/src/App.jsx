import {Route, Routes} from "react-router-dom"
import Home from "./Page/Home";
import ProductCreator from './Page/ProductCreator';
import Self from "./Page/Self";



function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/product_Creator" element={<ProductCreator/>} />
    <Route path="/product_Creator/self" element={<Self/>} />
  </Routes>

  );
}

export default App;
