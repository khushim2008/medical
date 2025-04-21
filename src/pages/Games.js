import React from "react";
import "./Games.css"; // External CSS for styling specific to the Games page
import { Link } from 'react-router-dom'; // For linking to different game pages

const Games = () => {
  return (
    <div className="games-page">
      {/* Header Section */}
      <header className="games-hero">
        <h1>Engage Your Mind with Our Games!</h1>
        <p>Your brain, like any muscle, needs regular exercise to stay sharp and build new connections. The more neurons you stimulate, the more active and agile your mind becomes. Fortunately, improving your brain health doesn't require hours of effort. With our diverse range of games across different categories and levels, you can easily find the perfect challenge to keep your brain engaged and growing!</p>
      </header>

      {/* Games Section */}
      <section className="games-list">
        <h2>Games for Cognitive Boost</h2>
        <div className="game-cards">
          {/* Game Card 1 */}
          <div className="game-card">
            <img src="https://cdn-icons-png.flaticon.com/512/7919/7919190.png" alt="Memory Game" className="game-image" />
            <h3>Memory Match</h3>
            <p>A classic memory game to sharpen recall skills and enhance concentration.</p>
            <Link to="/memory-match">
              <button className="play-button">Play</button>
            </Link>
          </div>
          
          {/* Game Card 2 */}
          <div className="game-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3659/3659861.png" alt="Puzzle Game" className="game-image" />
            <h3>Puzzle Solver</h3>
            <p>Challenge yourself with puzzles to improve problem-solving and critical thinking.</p>
            <Link to="/puzzle-solver">
              <button className="play-button">Play</button>
            </Link>
          </div>
          
          {/* Game Card 3 */}
          <div className="game-card">
            <img src="https://media.istockphoto.com/id/1269824697/vector/accounting-calculation-sign-icon-glyph-vector-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=GMj2NEZVice2BouO7wlh5hiPTqiBALLstZzkCoQZWYs=" alt="Math Challenge" className="game-image" />
            <h3>Math Challenge</h3>
            <p>Enhance math skills and speed with fun math challenges designed for all ages.</p>
            <Link to="/math-challenge">
              <button className="play-button">Play</button>
            </Link>
          </div>
          
          {/* Game Card 4 */}
          <div className="game-card">
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/word-game-4095154-3391834.png?f=webp&w=256" alt="Word Recall" className="game-image" />
            <h3>Word Recall</h3>
            <p>Boost memory by recalling words in quick bursts to enhance verbal recall skills.</p>
            <Link to="/word-recall">
              <button className="play-button">Play</button>
            </Link>
          </div>
          
          {/* Game Card 5 */}
          <div className="game-card">
            <img src="https://cdn-icons-png.flaticon.com/512/4805/4805775.png" alt="Shape Sequence" className="game-image" />
            <h3>Shape Sequence</h3>
            <p>Memorize and recreate shape patterns to strengthen visual memory.</p>
            <Link to="/shape-sequence">
              <button className="play-button">Play</button>
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Games;
