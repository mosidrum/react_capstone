import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Facts from './components/Pages/Facts';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
      </Routes>
    </div>
  );
}

export default App;
