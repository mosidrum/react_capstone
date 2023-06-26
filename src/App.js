import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from './redux/countrySlice';
import Home from './components/Pages/Home';
import Facts from './components/Pages/Facts';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  });

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
