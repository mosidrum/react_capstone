import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategory } from './redux/categorySlice';
import Home from './components/Pages/Home';
import Facts from './components/Pages/Facts';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Countries from './components/Countries';
import './css/App.css';
import Details from './components/Details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  });

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
