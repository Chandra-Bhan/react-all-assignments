import React from 'react';
import LuckyNumber from '../../assignment3/luckyNumber/LuckyNumber';
import Navbar from '../navbar/Navbar';

function Home() {
  return (
    <div>
    <Navbar/>
      <h1>This is the Home Page...</h1>
      <LuckyNumber/>
    </div>
  );
}

export default Home;
