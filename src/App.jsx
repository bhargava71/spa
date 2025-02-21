import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Layouts from './components/Layouts';
import OpenRoutes from './routing/OpenRoutes';
import PrivateRoutes from './routing/PrivateRoutes';
import ChangePassword from './pages/ChangePassword';



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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
