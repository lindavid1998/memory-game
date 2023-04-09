import React, { useState, useEffect } from 'react';
import './App.css';
import messiImg from './images/messi.jpeg';
import ronaldoImg from './images/ronaldo.jpeg';
import neymarImg from './images/neymar.jpg';
import mitomaImg from './images/mitoma.jpeg';
import haalandImg from './images/haaland.webp';
import iniestaImg from './images/iniesta.jpeg';
import martinezImg from './images/martinez.webp';
import viniImg from './images/vini.jpeg'
import mbappeImg from './images/mbappe.jpeg'
import benzemaImg from './images/benzema.webp'
import Player from './Player';

export default function App() {
	const [highScore, setHighScore] = useState(0);
	const [currentScore, setCurrentScore] = useState(0);
	const [visitedPlayers, setVisitedPlayers] = useState([]);
	const [players, setPlayers] = useState([
		{ name: 'Lionel Messi', src: messiImg },
		{ name: 'Cristiano Ronaldo', src: ronaldoImg },
		{ name: 'Kaoru Mitoma', src: mitomaImg },
		{ name: 'Neymar', src: neymarImg },
		{ name: 'Erling Haaland', src: haalandImg },
		{ name: 'Andres Iniesta', src: iniestaImg },
		{ name: 'Emi Martinez', src: martinezImg },
		{ name: 'Vinicius Junior', src: viniImg },
		{ name: 'Karim Benzema', src: benzemaImg },
		{ name: 'Kylian Mbappe', src: mbappeImg },
	]);

	const handleClick = (e) => {
		const playerDiv = e.currentTarget;
		const name = playerDiv.querySelector('p').textContent;

		if (visitedPlayers.includes(name)) {
			setHighScore(Math.max(currentScore, highScore));
			setCurrentScore(0);
			setVisitedPlayers([]);
		} else {
			setVisitedPlayers(visitedPlayers.concat([name]));
			setCurrentScore(currentScore + 1);
		}
	};

	useEffect(() => {
		const shuffleArray = (array) => {
			for (let i = array.length - 1; i > 0; i--) {
				const randomIndex = getRandomIntInclusive(0, i);
				swapElements(array, i, randomIndex);
			}
			return array;
		};

		const getRandomIntInclusive = (min, max) => {
			// Generates a random integer between min and max (inclusive).
			const minCeil = Math.ceil(min);
			const maxFloor = Math.floor(max);
			return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
		};

		const swapElements = (array, index1, index2) => {
			// Swaps the elements at index1 and index2 in array.
			[array[index1], array[index2]] = [array[index2], array[index1]];
		};

		setPlayers(shuffleArray(players));
	}, [currentScore, players]);

	return (
		<div className='App'>
			<header>
				<div class='header-content'>
					<h1>David Lin 2023</h1>
					<a href='https://github.com/' target='_blank'>
						<i class='fa-brands fa-github'></i>
					</a>
				</div>
			</header>

			<div className='scores'>
				<div className='high-score'>High score: {highScore}</div>
				<div className='current-score'>Current score: {currentScore}</div>
			</div>

			<div className='players'>
				{players.map((player, i) => {
					return (
						<Player
							imgSrc={player.src}
							name={player.name}
							onClick={handleClick}
							key={i}
						/>
					);
				})}
			</div>
		</div>
	);
}
