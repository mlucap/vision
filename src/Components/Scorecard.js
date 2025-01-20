const ScoreCard = ({ score, highscore, coordinateToGuess }) => {
	return (
		<div id="scorecard-container">
			<div>
				<h1 className="header-text">Find: {coordinateToGuess}</h1>
				<h1 className="header-text">Highscore:</h1>
				<h2 className="text">{highscore}</h2>
				<h1 className="header-text">Current Score:</h1>
				<h2 className="text">{score}</h2>
			</div>
		</div>
	);
}

export default ScoreCard;