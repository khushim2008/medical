import React, { useState, useEffect } from 'react';
import './MemoryMatchGame.css';

const MemoryMatchGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  // Initialize the cards
  const cardImages = [
    'https://cdn-icons-png.flaticon.com/512/1363/1363908.png',
    'https://cdn-icons-png.flaticon.com/512/1363/1363908.png',
    'https://cdn-icons-png.flaticon.com/512/7919/7919190.png',
    'https://cdn-icons-png.flaticon.com/512/7919/7919190.png',
    'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
    'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
    'https://cdn-icons-png.flaticon.com/512/3032/3032471.png',
    'https://cdn-icons-png.flaticon.com/512/3032/3032471.png',
  ];

  // Shuffle the cards and set them
  useEffect(() => {
    const shuffledCards = shuffle([...cardImages]);
    setCards(shuffledCards);
  }, []);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const flipCard = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    // Check if two cards are flipped and match
    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, cards[firstIndex]]);
        if (matchedCards.length === cards.length / 2 - 1) {
          setGameOver(true);
        }
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setMatchedCards([]);
    setFlippedCards([]);
    setCards(shuffle([...cardImages]));
  };

  return (
    <div className="memory-match-container">
      <h1>Memory Match Game</h1>
      {gameOver && <div className="game-over">You Win! 🏆</div>}
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flippedCards.includes(index) || matchedCards.includes(card) ? 'flipped' : ''}`}
            onClick={() => flipCard(index)}
          >
            <img
              src={flippedCards.includes(index) || matchedCards.includes(card) ? card : 'https://cdn-icons-png.flaticon.com/512/1363/1363901.png'}
              alt="card"
            />
          </div>
        ))}
      </div>
      <button className="reset-btn" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default MemoryMatchGame;
