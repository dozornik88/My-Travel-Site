import React, { Component } from "react";
import Parfumes from "../data/Parfumes.json";
import "../styles/ParfumeDescription.css";

const allParfumes = Parfumes;

class ParfumeDescription extends Component {
	render() {
		return (
			<>
				<div className="parfume-description-container">
					<div className="parfume-description-container-box">
						<div className="parfume-single-title">
							{this.props.match.params.parfume_title}
						</div>
						<div>
							{allParfumes
								.filter((val) => {
									if (
										this.props.match.params.parfume_title === val.parfume_title
									) {
										return val.parfume_photo;
									} else {
										return null;
									}
								})
								.map((val, key) => (
									<>
										<div className="parfume-description-container" key={key}>
											<img
												className="parfume-photo"
												src={val.parfume_photo}
												alt="parfume pic"
											/>
											<div className="parfume-brand-year-gender">
												<div className="parfume-brand">
													<h4>Brand Title</h4>
													{val.parfume_brand}
												</div>

												<div className="parfume-gender">
													<h4>This Perfume is for</h4>
													{val.parfume_gender}
												</div>

												<div className="parfume-year">
													<h4>Year of Release</h4>
													{val.parfume_year}
												</div>
											</div>
											<div className="parfume-notes-all">
												<div className="parfume-notes-top">
													<h4>Top Notes</h4>
													{val.top_notes[0]} {val.top_notes[1]}{" "}
													{val.top_notes[2]} {val.top_notes[3]}
													{val.top_notes[4]} {val.top_notes[5]}{" "}
													{val.top_notes[6]}
													{val.top_notes[7]}
												</div>

												<div className="parfume-notes-middle">
													<h4>Middle Notes</h4>
													{val.middle_notes[0]} {val.middle_notes[1]}{" "}
													{val.middle_notes[2]} {val.middle_notes[3]}
													{val.middle_notes[4]} {val.middle_notes[5]}{" "}
													{val.middle_notes[6]}
													{val.middle_notes[7]}
												</div>

												<div className="parfume-notes-base">
													<h4>Base Notes</h4>
													{val.base_notes[0]} {val.base_notes[1]}
													{val.base_notes[2]} {val.base_notes[3]}
													{val.base_notes[4]} {val.base_notes[5]}{" "}
													{val.base_notes[6]}
													{val.base_notes[7]}
												</div>
											</div>
											<div className="parfume-description">
												<h4>Description</h4>
												{val.parfume_description}
											</div>
										</div>
									</>
								))}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default ParfumeDescription;
