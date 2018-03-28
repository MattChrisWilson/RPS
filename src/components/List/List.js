import React from 'react';
import PropTypes from 'prop-types';

/** Outputs a list item */
const List = (props) => {
	if(typeof props.content === 'undefined') return <div />
	const { length = 0 } = props.content
	if(length === 0) return <div />

	const items = props.content.map(item => <li key={`${typeof props.prefix !== 'undefined' ? props.prefix : 'li'}-${item.key}`} >{item.value} ({`${typeof item.dstamp !== 'undefined' ? item.dstamp : ''}`})</li>)
	return <ul className='simple' >{items}</ul>
}

List.propTypes = {
	/** The string to be displayed */
	content: PropTypes.array.isRequired,
	/** Prefix for the list item key */
	prefix: PropTypes.string,
}

export default List