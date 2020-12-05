import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<footer>
			<p>Copyright © Ricardo Javier </p>
		</footer>
	);
};

Footer.propTypes = {
	name: PropTypes.string
};

export default Footer;
