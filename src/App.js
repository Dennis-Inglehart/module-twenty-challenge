import React from 'react';
import './App.css';
import Header from './components/Header';
import JumboCard from './components/JumboCard';
import SmallCards from './components/SmallCards';

function App() {
  return (
    <div>
      <Header />
      <JumboCard />
      <SmallCards />
    </div>
  );
}

export default App;