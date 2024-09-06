import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Dashboard from './components/Dashboard';
import ContactPage from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Footer from './components/Footer';
import Forum from './components/Forum';
function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes as needed */}
      </Routes>
      {/* Render Herosection and Dashboard only if not on the contact or about pages */}
      {location.pathname !== '/contact' && location.pathname !== '/about' && location.pathname !== '/login' && (
        <>
          <Herosection />
          <Dashboard />
          <Forum />
          <Footer />
        </>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
