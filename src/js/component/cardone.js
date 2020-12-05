import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const Cardone = props => {
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
		"https://cdn.shopify.com/s/files/1/0103/7683/9215/products/productimage-picture-c100-100-neon-blue-1783_800x.jpg?v=1571388779",
	cardTitle: "Title 1",
	cardDescription:
		"Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Title 1"
	}
};

export default Cardone;
