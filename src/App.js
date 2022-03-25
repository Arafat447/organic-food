
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
import ProductDetail from './Components/ProductDetail/ProductDetail';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product-detail/:id" element={<ProductDetail/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
