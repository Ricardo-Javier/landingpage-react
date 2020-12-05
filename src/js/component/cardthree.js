import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const Cardthree = props => {
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
		"https://www.atozpartyrental.net/dev/wp-content/uploads/2018/06/SPANDEX_swatch_neon-yellow.jpg",
	cardTitle: "Title 3",
	cardDescription:
		"Title 3Title 3Title 3Title 3Title 3Title 3Title 3Title 3Title 3Title 3Title 3Title 3Title 3Title 3Title 3",
	button: {
		url: "#",
		label: "TTitle 3"
	}
};

export default Cardthree;
