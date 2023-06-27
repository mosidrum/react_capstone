import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategory } from './redux/categorySlice';
import Home from './components/Pages/Home';
import Facts from './components/Pages/Facts';
import Navbar from './components/Navbar';
import Countries from './components/Countries';
import './App.css';
import Modal from './components/Modal';

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  });

  return (
    <div>
      <Navbar />
      {isOpen && <Modal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="countries" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
