import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../List';

/** Displays the game history */
class History extends Component {
	getIntervalSinceNow(time) {
		// Determine how long ago the entry was added based on the history key
		const secs = Math.floor((new Date() - Date.parse(time)) / 1000)
		return (secs < 60) ? {unit: 'seconds', duration: secs} : {unit: 'minutes', duration: Math.floor(secs/60)}
	}

	render() {
		const { invert = false } = this.props
		const history = this.props.history.map(entry => {
			const interval = (this.getIntervalSinceNow(entry.key))
			return { ...entry, dstamp: interval.duration === 0 ? 'Now' : `${interval.duration} ${interval.unit} ago` }
		})

		return <div className={`marg5Horiz pad5Vert ${(invert === true) ? 'invert' : ''} historyCont`}>
			<h1 className='simple'>History</h1>
			<List content={history} prefix='History' />
		</div>
	}
}

History.propTypes = {
	/** An array containing the history records with an object as value  */
	history: PropTypes.array.isRequired,
	/** Should the colours be inverted to accomodate a dark background */
	invert: PropTypes.bool,
}

History.defaultProps = {
	invert: false,
	history: []
}

export default History