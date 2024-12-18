import React from 'react';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-100">
        <Login />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;