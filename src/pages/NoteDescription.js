import React, { Component } from "react";
import AllNotes from "../data/AllNotes.json";
import "../styles/NoteDescription.css";

const allNote = AllNotes;

class NoteDescription extends Component {
	render() {
		return (
			<>
				<div className="note-description-container">
					<div className="note-description-container-box">
						<div className="note-single-title">
							{this.props.match.params.title}
						</div>
						<div>
							{allNote
								.filter((val) => {
									if (this.props.match.params.title === val.title) {
										return val.photo;
									} else {
										return null;
									}
								})
								.map((val, key) => (
									<>
										<div className="note-description-photo" key={key}>
											<img
												className="note-photo"
												src={val.photo}
												alt="note pic"
											/>
											<div className="note-description">{val.descption}</div>
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

export default NoteDescription;
