// At some point I would implement an options function to choose colours and set up names

const initialState = {
	bgColour: {
		1: 'orange',
		2: 'blue'
	},
	name: {
		1: 'Player 1',
		2: 'Comp AI'
	}
}

export default function(state = initialState, action) {
	switch(action.type) {
		default:
			return state
	}
}