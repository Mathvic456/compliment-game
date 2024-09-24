// src/App.js
import React from 'react';
import Card from './components/card';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="intro-message">
        Hey owo/mama/my love/my madam and all the countless names I call you.
        I know it's been a rough few days and I've honestly been thinking of how to help,
        and I feel bad that I'm being helpless to you in this situation. I know it's not much,
        but I hope this game makes you smile.
      </p>
      <Card compliment="You have been an amazing friend for the past 6 years. I truly appreciate you mama wizzy!" />
    </div>
  );
}

export default App;
