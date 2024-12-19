import React from 'react';
import {  BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Components/Login';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Signup from './Components/Signup';

const App = () => {
  return (


    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Signup />} />
    </Routes>
    </BrowserRouter>
    // <div className="flex flex-col min-h-screen">
    //   <Header />
      
    //   <main className="flex-grow bg-gray-100">
    //     <Login />
    //   </main>
      
    //   <Footer />
    // </div>
  );
};

export default App;