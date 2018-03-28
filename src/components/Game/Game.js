import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import SelectionStrip from '../SelectionStrip';
import History from '../../containers/history';
import { generateRandomNumber } from '../../resources';

const resMap = new Map([[1, 'ROCK'], [2, 'PAPER'], [3, 'SCISSORS']])

// A temporary quick fix here unfortunately. As loathed as I am to do this, a recent update to the Modal component in Semantic UI is causing the modal window to appear half off of the screen. 
const inlineStyle = {
  modal : {
    marginTop: '0 !important',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

/** The parent Rock Paper Scissors component */
class Game extends Component {
	componentDidUpdate(prevState) {
		// If player one has made their choice, time for the ai to make it's mind up
		if(this.props.lastActionBy === 1) {
			this.makeDecision()
		}

		// Player two was the last to pick and we have both decisions, so check for a winner
		if(this.props.lastActionBy === 2 && this.props.selection[2] !== null && this.props.selection[1] !== null) {
			this.declareWinner()
			.then(resp => {
				let dt = new Date()
				this.props.setResult({key: dt.toISOString(), value: resp})
			})
		}
	}

	makeDecision() {
		generateRandomNumber(1, 3)
		.then(res => resMap.get(res))
		.then(res => this.props.setPlayerChoice({ 2: res }))
		.catch(e => this.props.setGameError())
	}

	declareWinner() {
		return new Promise((res, rej) => {
			const { 1: p1, 2: p2 } = this.props.selection

			if(p1 === p2) {
				return res('Draw')
			}

			if(this.props.options[p1].beats === p2) {
				return res(`${this.props.names[1]} wins!`)
			}

			return res(`${this.props.names[2]} wins!`)
		})
	}

	render() {
		return <div className='green fillHeight'>
			<SelectionStrip 
				options={this.props.options} 
				colour={this.props.bgColours[1]} 
				selected={this.props.selection[1]}
				onClick={(option) => {this.props.setPlayerChoice({ 1: option })}} 
			/>
			<SelectionStrip 
				options={(typeof this.props.selection[2] !== 'undefined' && this.props.selection[2] !== null) ? {[this.props.selection[2]]: this.props.options[this.props.selection[2]]} : {}} 
				colour={this.props.bgColours[2]}
				selected={this.props.selection[2]}
			/>
			<History invert />	
			<button className={`simple invert brick green pad5 marg5 borderInvert`} onClick={() => this.props.resetGame()} >Reset Game</button> 
			<Modal 
				basic 
				size='small' 
				open={this.props.hasError} 
				mountNode={document.getElementById('root')} 
				style={inlineStyle.modal} 
				header={<h3>I Don't Know How To Tell You This</h3>}
				content={<p>Oh, now this is embarrasing! I've errored. Clearly your RPS skills are too much for me.</p>}
				actions={[{key: 'forgiveness', content: 'I forgive you!', positive: true}]}
				onClose={this.props.resetRound}
			/>
		</div>
	}
}

Game.propTypes = {
	/** An object of player names */
	names: PropTypes.shape({
		1: PropTypes.string,
		2: PropTypes.string
	}),
	/** An object of player selections */
	selection: PropTypes.shape({
		1: PropTypes.string,
		2: PropTypes.string
	}),
	/** An object containing the game options: Rock, Paper, Scissors */
	options: PropTypes.shape({
		ROCK: PropTypes.shape({
			image: PropTypes.string.isRequired,
			beats: PropTypes.string.isRequired,
		}),
		PAPER: PropTypes.shape({
			image: PropTypes.string.isRequired,
			beats: PropTypes.string.isRequired,
		}),
		SCISSORS: PropTypes.shape({
			image: PropTypes.string.isRequired,
			beats: PropTypes.string.isRequired,
		}),
	}),
	/** An object containing colour options for each player */
	bgColours: PropTypes.shape({
		1: PropTypes.string,
		2: PropTypes.string
	}),
	/** Determines if an error has occurred */
	hasError: PropTypes.bool,
	/** The function to set player choice */
	setPlayerChoice: PropTypes.func,
	/** Function to reset the game's round */
	resetRound: PropTypes.func,
}

Game.defaultProps = {
	hasError: false,
	options: {
		ROCK: {
			image: 'rock.png',
			beats: 'SCISSORS',
		},
		PAPER: {
			image: 'paper.png',
			beats: 'ROCK',
		},
		SCISSORS: {
			image: 'scissors.png',
			beats: 'PAPER',
		}
	},
	bgColours: {
		1: 'orange',
		2: 'blue'
	},
	names: {
		1: 'Player 1',
		2: 'Player 2'
	},
	selection: {
		1: null,
		2: null
	}
}

export default Game