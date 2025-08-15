import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import Product from '../src/components/Product/Product.jsx';
import ProductDetail from '../src/components/ProductDetail/ProductDetail.jsx';
import Navbar from '../src/components/Navbar/Navbar.jsx';
// import About from '../src/components/About/About.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente wrapper para pasar la variante correcta a Navbar
function AppContent() {
  const location = useLocation();
  
  // Determinar la variante basada en la ruta actual
  let navbarVariant = 'home';
  if (location.pathname.startsWith('/productos')) {
    navbarVariant = 'product';
  }
  
  return (
    <div className="App">
      <Navbar variant={navbarVariant} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About/>} /> */}
        <Route path='/productos' element={<Product />} />
        <Route path='/productos/:id' element={<ProductDetail />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
