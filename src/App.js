import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forside from './pages/Forside';
import Prisliste from './pages/Prisliste';
import Services from './pages/Services';
import Omos from './pages/Omos';
import Booking from './pages/Booking';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Forside/>} />
        <Route path="/prisliste" element={<Prisliste/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/omos" element={<Omos/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>  
    </div>
  );
}

export default App;
