import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import Product from '../src/components/Product/Product.jsx';
// import About from '../src/components/About/About.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About/>} /> */}
          <Route path='/productos' element={<Product />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
