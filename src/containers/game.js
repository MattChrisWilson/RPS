import { connect } from 'react-redux';
import { setPlayerChoice, setResult, setGameError, resetRound, resetGame } from '../actions';
import Game from '../components/Game';

const mapStateToProps = (state, props) => {
	return {
		options: state.game.options,
		selection: state.game.selection,
		bgColours: state.config.bgColour,
		names: state.config.name,
		lastActionBy: state.game.lastActionBy,
		hasError: state.game.hasError,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setPlayerChoice: (data) => dispatch(setPlayerChoice(data)),
		setResult: (data) => dispatch(setResult(data)),
		setGameError: () => dispatch(setGameError()),
		resetRound: () => dispatch(resetRound()),
		resetGame: () => dispatch(resetGame()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)