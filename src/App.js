import {Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Homepage/Contact';
import Home from './Components/Homepage/Home';
import Products from './Components/Homepage/Products';
import Users from './Components/Homepage/Users';
import Loginform from './Components/Login/Loginform';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Loginform/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/" element={<Loginform />} />
        </Routes>
    </div>
  );
}

export default App;

