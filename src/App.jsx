import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Layouts from './components/Layouts';
import Layouts1 from './components/Layouts1';
import OpenRoutes from './routing/OpenRoutes';
import PrivateRoutes from './routing/PrivateRoutes';




function App() {
  return (
    <BrowserRouter>
      <Routes>

    

        <Route path="/" element={<Layouts />}>

          {/* <Route path="dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
          <Route path="change-password" element={<PrivateRoutes><ChangePassword /></PrivateRoutes>} /> */}
             <Route index element={<OpenRoutes><HomePage /></OpenRoutes>} />
          {/* <Route path="dashboard" element={<Dashboard />} />
          <Route path="change-password" element={<ChangePassword />} /> */}
        </Route>

        <Route path="/" element={<Layouts1 />}>

          {/* <Route path="dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
          <Route path="change-password" element={<PrivateRoutes><ChangePassword /></PrivateRoutes>} /> */}
             <Route path="/about" element={<OpenRoutes><About /></OpenRoutes>} />
          {/* <Route path="dashboard" element={<Dashboard />} />
          <Route path="change-password" element={<ChangePassword />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
