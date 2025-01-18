import b_400 from '../imgs/black_400.png';
import w_400 from '../imgs/white_400.png';
import '../css/Icons.css'

const Icons = ({ colour }) => {
	return (
		<div id="icon-container">
			<img src={colour === "white" ? b_400 : w_400} id="top" alt="Player icon" className="icon" />
			<img src={colour === "white" ? w_400 : b_400} id="bottom" alt="Player icon" className="icon" />
		</div>
	);
}

export default Icons;