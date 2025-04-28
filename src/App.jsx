import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact'; 
import Layouts from './components/Layouts';
import Layouts1 from './components/Layouts1';
import OpenRoutes from './routing/OpenRoutes';
import PrivateRoutes from './routing/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page with Layouts */}
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* Other Pages with Layouts1 */}
        <Route path="/" element={<Layouts1 />}>
  <Route path="/about" element={<OpenRoutes><About /></OpenRoutes>} />
  <Route path="/services" element={<OpenRoutes><Services /></OpenRoutes>} />
  <Route path="/gallery" element={<OpenRoutes><Gallery /></OpenRoutes>} />
  <Route path="/contact" element={<OpenRoutes><Contact /></OpenRoutes>} />
</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
