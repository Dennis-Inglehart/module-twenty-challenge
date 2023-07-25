import React from 'react';
import './App.css';
import Header from './components/Header';
import JumboCard from './components/JumboCard';
import SmallCards from './components/SmallCards';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <JumboCard />
      <SmallCards />
      <Links />
      <Footer />
    </div>
  );
}

export default App;