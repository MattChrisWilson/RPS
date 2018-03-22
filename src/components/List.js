import React from 'react';

const List = (props) => {
	if(typeof props.content === 'undefined') return <div />
	const { length = 0 } = props.content
	if(length === 0) return <div />

	const items = props.content.map(item => <li key={`${typeof props.prefix !== 'undefined' ? props.prefix : 'li'}-${item.key}`} >{item.value} ({`${typeof item.dstamp !== 'undefined' ? item.dstamp : ''}`})</li>)
	return <ul className='simple' >{items}</ul>
}

export default List