import { SET_PLAYER_CHOICE, SET_RESULT, SET_GAME_ERROR, RESET_ROUND, RESET_GAME } from '../actions';

const initialState = {
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
	selection: {
		1: null,
		2: null
	},
	history: [],
	lastActionBy: null,
	hasError: false,
}

export default function(state = { ...initialState }, action) {
	switch(action.type) {
		case SET_PLAYER_CHOICE:
			let lastActionBy = Object.keys(action.payload)[0]*1
			return { ...state, selection: { ...state.selection, ...action.payload }, lastActionBy, hasError: false }
		case SET_RESULT:
			let history = state.history.reduce((arr, item) => {
				if(arr.length < 5)
					arr.push(item)
				return arr
			}, [action.payload])
			return { ...state, history}
		case SET_GAME_ERROR:
			return { ...state, hasError: true }
		case RESET_ROUND:
			return { ...state, selection: initialState.selection, lastActionBy: initialState.lastActionBy, hasError: false }
		case RESET_GAME:
			return { ...initialState }
		default:
			return state
	}
}