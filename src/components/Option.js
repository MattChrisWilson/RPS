import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-retina-image';

/** Outputs an option for the RPS game */
const Option = (props) => {
	const { image = 'waiting.png' } = props
	const Img = <Image src={`../../images/${image}`} alt={props.altText} />

	return (typeof props.onClick !== 'undefined') ? <button className={`${(props.selected === 'true') ? 'selected' : ''} simple optionCont pad5Horiz`} onClick={props.onClick} >{Img}</button> : Img
}

Option.propTypes = {
	/** The image for the option */
	image: PropTypes.string.isRequired,
	/** Alternative text for the image */
	altText: PropTypes.string.isRequired,
	/** Defines if this option has been selected */
	selected: PropTypes.string,
	/** What should happen if the option is clicked */
	onClick: PropTypes.func,
}

Option.defaultProps = {
	image: 'waiting.png',
	altText: 'Option Image',
}

export default Option