import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Footer } from './Components';
import { useDispatch } from 'react-redux';
import { login } from './Redux/Auth';
const App = () => {

  const dispatch = useDispatch();
const navigate = useNavigate()
  useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
          dispatch(login({ token }));
          navigate('/browse')
      }
  }, [dispatch]);
  return (
    <div>
    <Outlet/>
    <Footer/>
    </div>
  );
};

export default App;
