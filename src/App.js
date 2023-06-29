import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategory } from './redux/categorySlice';
import Home from './components/Pages/Home';
import Facts from './components/Pages/Facts';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Countries from './components/Countries';
import './css/App.css';
import Back from './components/Back';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  });

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Navbar />
      {!isHomePage && <Back />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
