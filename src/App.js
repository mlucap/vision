import './App.css';
import Header from './Components/Header.js';
import Board from './Components/Board.js';
import Icons from './Components/Icons.js';
import { useState } from 'react';

const App = () => {
	const [iconColour, setIconColour] = useState("white");
	return (
		<>
		<Header />
		<div className='container'>
			<Icons colour={iconColour}/>
			<div className='board'>
				<Board />
			</div>
		</div>
		</>
	);
}

export default App;
