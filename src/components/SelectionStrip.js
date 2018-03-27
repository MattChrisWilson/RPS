import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

/** Outputs a browser-wide strip displaying player choices */
const SelectionStrip = (props) => {
	if(typeof props.options === 'undefined') return <div />

	const { 
		selected = '',
		colour = 'green',
	} = props

	const optionGroup = Object.keys(props.options).map(option => {
			const params = (typeof props.onClick !== 'undefined') ? {onClick: () => {props.onClick(option)}} : {}

			return <Option key={`opt-img-${option}`} 
				image={props.options[option].image} 
				selected={`${(selected === option) ? true : false}`}
				{ ...params }
			/>
		}
	)

	if(optionGroup.length === 0) optionGroup.push(<Option key='opt-img-WAITING' image='waiting.png' />)

	return <div className={`${colour} flex`}>
		<div className='center'>
			{optionGroup}
		</div>
	</div>
}

SelectionStrip.propTypes = {
	/** An object containing the game options: Rock, Paper, Scissors */
	options: PropTypes.object.isRequired,
	/** The key of the selected game option, if one has been set */
	selected: PropTypes.string,
	/** A string defining the selected player colour */
	colour: PropTypes.string,
}

export default SelectionStrip