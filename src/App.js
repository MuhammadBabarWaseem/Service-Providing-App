import { Routes, Route, Redirect } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Service from './Component/Services';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Redirect to='/' />
      </Routes>
    </>
  );
}

export default App;
