import React, { useState } from "react";
import Introduction from "../components/Homepage/Introduction";
import MySkills from "../components/Homepage/MySkills";
import Navigation from "../components/Global/Navigation";
import Footer from "../components/Global/Footer";
import "../Styles/homepage/styles.scss";

const Home = () => {
	// const [activePage, setActivePage] = useState("Home");
	return (
		<>
			<Navigation activePage="Home" />
			<Introduction />
			<MySkills />
			<Footer />
		</>
	);
};

export default Home;
