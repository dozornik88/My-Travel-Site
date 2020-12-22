import React from "react";
import "../styles/SideBar.css";

const SideBar = () => {
	return (
		<>
			<div className="sidebar-container">
				<div className="sidebar-wrapper">
					<div className="sidebar">
						<div className="filter-title-button">
							<h2 className="filter-name">Filter</h2>
							<button className="filter-clear">Clear Filter</button>
						</div>

						<div className="round">
							<h3 className="sidebar-category-title">Categories</h3>
							<label className="container">
								<h4 className="sidebar-font">Vodka</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Putin</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Balalaika</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Medvedj</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
						</div>
						<div className="round">
							<h3 className="sidebar-category-title">Gender</h3>
							<label className="container">
								<h4 className="sidebar-font">Male</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Female</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Unisex</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
						</div>
						<div className="round">
							<h3 className="sidebar-category-title">Notes</h3>
							<label className="container">
								<h4 className="sidebar-font">Citrus</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Lemon</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Flower</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Kasha</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
						</div>
						<div className="round">
							<h3 className="sidebar-category-title">Country</h3>
							<label className="container">
								<h4 className="sidebar-font">USA</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">France</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">UK</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Russia</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Africa</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
						</div>
						<div className="round">
							<h3 className="sidebar-category-title">Brands</h3>
							<label className="container">
								<h4 className="sidebar-font">Gucci</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Prada</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Boss</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Dior</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
							<label className="container">
								<h4 className="sidebar-font">Addidas</h4>
								<input type="checkbox" />
								<span className="checkmark"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideBar;
