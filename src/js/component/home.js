import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Footer from "./footer";
import Cardone from "./cardone";
import Cardtwo from "./cardtwo";
import Cardthree from "./cardthree";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const menu = [{ label: "Home", url: "/" }, { label: "About", url: "#" }];
	return (
		<div className="">
			<Navbar menu={menu} brand="Start Bootstrap" />
			<div className="grid-container">
				<Jumbo />
				<div className="grid-container-cards">
					<Cardone />
					<Cardtwo />
					<Cardthree />
				</div>
			</div>
			<Footer />
		</div>
	);
}
