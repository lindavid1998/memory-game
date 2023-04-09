import React, { useState } from 'react';
import './App.css';
import messiImg from './images/messi.jpeg';
import ronaldoImg from './images/ronaldo.jpeg';
import neymarImg from './images/neymar.jpg';
import mitomaImg from './images/mitoma.jpeg';
import Player from './Player';

export default function App() {
	const [highScore, setHighScore] = useState(0);
	const [currentScore, setCurrentScore] = useState(0);
	const [visitedPlayers, setVisitedPlayers] = useState([]);

	const players = [
		{ name: 'Lionel Messi', src: messiImg },
		{ name: 'Cristiano Ronaldo', src: ronaldoImg },
		{ name: 'Kaoru Mitoma', src: mitomaImg },
		{ name: 'Neymar', src: neymarImg },
	];

	return (
		<div className='App'>
			<div className='scores'>
				<div className='high-score'>High score: {highScore}</div>
				<div className='current-score'>Current score: {currentScore}</div>
			</div>

			<div className='players'>
        {players.map((player, i) => {
          return (
            <Player imgSrc={player.src} name={player.name} key={i} />
          );
				})}
			</div>
		</div>
	);
}
