import React from 'react';
import './App.css';
import Header from './src/components/Header';
import JumboCard from './src/components/JumboCard';
import SmallCards from './src/components/SmallCards';

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