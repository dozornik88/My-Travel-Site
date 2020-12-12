import React from "react";
import "../styles/Hero.css";
import Video from "../assets/videos/video1.mp4";
import SearchBar from "./SearchBar";

const Hero = () => {
	return (
		<div className="hero-container">
			<video src={Video} autoPlay loop muted />
			<h1>Find Your Scent</h1>
			<p>What are you waiting for?</p>

			<div className="SearchBar">
				<SearchBar />
			</div>
		</div>
	);
};

export default Hero;
