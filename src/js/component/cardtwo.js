import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const Cardtwo = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={data.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{data.cardTitle}</h5>
				<p className="card-text">{data.cardDescription}</p>
				<a href="#" className="btn">
					{data.button.label}
				</a>
			</div>
		</div>
	);
};

const data = {
	image:
		"https://www.atozpartyrental.net/dev/wp-content/uploads/2018/06/SPANDEX_swatch_neongreen.jpg",
	cardTitle: "Title 2",
	cardDescription:
		"Title 2Title 2Title 2Title 2Title 2Title 2Title 2Title 2Title 2Title 2Title 2Title 2Title 2Title 2Title 2",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Title 2"
	}
};

export default Cardtwo;
