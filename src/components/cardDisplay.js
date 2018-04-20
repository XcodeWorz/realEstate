import React, {Component} from 'react';
import Card from './card';

const CardDisplay = (props) => {
	const neighborhood = props.neighborhood
	const cards = neighborhood.map((card, i) => {
		return (
				<div key={i} className={i} onMouseOver={props.changeId.bind(props.changeId, i)} onMouseLeave={props.changeId.bind(props.changeId, null)} >
					<Card img={card.image}
								price={card.price}
								beds={card.bedrooms}
								baths={card.bathrooms}
								size={card.size}
								address={card.address}
								/>
				</div>
			)
	});

	return (
		<div className="cardDisplay">
			<div className="cardHeader">
				<h2 className="cardHeaderTitle">{props.value} Real Estate</h2>
				<div className="numHomes">{props.neighborhood.length} homes for sale</div>
				<div className="headerLinksDiv">
					<span className="headerLinks">Price Ascending</span><span className="headerLinks">Price Descending</span>
				</div>
			</div>
			{cards}
		</div>
		)
}

export default CardDisplay;
