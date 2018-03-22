import React from 'react';
import Image from 'react-retina-image';

const Option = (props) => {
	const { image = 'waiting.png' } = props
	const Img = <Image src={`../../images/${image}`} alt={props.altText || 'Option Image'} />

	return (typeof props.onClick !== 'undefined') ? <button className={`${(props.selected === 'true') ? 'selected' : ''} simple optionCont pad5Horiz`} onClick={props.onClick} >{Img}</button> : Img
}

export default Option