import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Modal from "./Modal";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container ">
				<div>
					<Jumbotron/>
				</div>
				<div>
					<Card />
				</div>
			</div>
			<Modal />
		</>
	);
};

export default Home;
