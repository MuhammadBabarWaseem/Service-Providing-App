import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';
import Service from './Component/Services';
import WorkInProgress from './Component/WorkInProgress';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pagenotfound' element={<WorkInProgress/>} />
        <Route path="*" element={<Navigate to="/pagenotfound" />} />
      </Routes>
    </>
  );
}

export default App;
