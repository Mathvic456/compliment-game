// src/Card.js
import React, { useState } from 'react';
import './card.css';

const Card = () => {
  const compliments = [
    "You have been an amazing friend for the past 6 years. I truly appreciate you!",
    "Your kindness and positivity always brighten my day!",
    "You are such a thoughtful and wonderful person. I'm lucky to have you in my life.",
    "Your strength and resilience inspire me every day.",
    "Thank you for always being there for me. You mean the world to me."
  ];

  const [currentCompliment, setCurrentCompliment] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const revealCard = () => {
    setRevealed(true);
  };

  const showAnotherCard = () => {
    if (currentCompliment < compliments.length - 1) {
      setCurrentCompliment(currentCompliment + 1);
      setRevealed(false);
    } else {
      alert('Your game has ended, would you like to start again?');
      setCurrentCompliment(0);
      setRevealed(false);
    }
  };

  return (
    <div className="card-container">
      {!revealed && (
        <button onClick={revealCard} className="reveal-button">
          Reveal Card
        </button>
      )}
      <div className={`card ${revealed ? 'revealed' : ''}`}>
        {revealed && <p className="compliment">{compliments[currentCompliment]}</p>}
      </div>
      {revealed && (
        <button onClick={showAnotherCard} className="another-button">
          Show Another Card?
        </button>
      )}
    </div>
  );
};

export default Card;
