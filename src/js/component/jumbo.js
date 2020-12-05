import React from "react";
import PropTypes from "prop-types";

const Jumbo = props => {
	return (
		<div
			className="jumbotron"
			style={{
				backgroundColor: "#ffffcc",
				border: "none",
				margintTop: "30px"
			}}>
			<h1
				className="display-4"
				style={{
					color: "#33cc33",
					border: "none"
				}}>
				Hello, world!
			</h1>
			<p
				className="lead"
				style={{
					color: "#33cc33",
					border: "none"
				}}>
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-4" />
			<p
				style={{
					color: "#33cc33",
					border: "none"
				}}>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a
				className="btn"
				style={{
					border: "none"
				}}
				href="#"
				role="button">
				Learn more
			</a>
		</div>
	);
};

Jumbo.propTypes = {
	name: PropTypes.string
};

export default Jumbo;
