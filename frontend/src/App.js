import React from 'react';
import Signup from './Signup';
import Login from './login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './Profile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
