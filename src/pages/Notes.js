import React, { useState } from "react";
import NotesCategory from "../data/NotesCategory.json";
import AllNotes from "../data/AllNotes.json";
import "../styles/Notes.css";

const noteCategories = NotesCategory;
const allNotes = AllNotes;

function Notes() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<>
			<h1 className="note-category-titles">Categories</h1>
			<div className="note-category-container">
				<a className="note-category-navbar" href="#1">
					Citrus Notes
				</a>
				<a className="note-category-navbar" href="#2">
					Fruit and Vegetable Notes
				</a>
				<a className="note-category-navbar" href="#3">
					Sweets Notes
				</a>
				<a className="note-category-navbar" href="#4">
					Drinks
				</a>
				<a className="note-category-navbar" href="#5">
					Herbs and Spices
				</a>
				<a className="note-category-navbar" href="#6">
					Natural and Synthetic
				</a>
				<a className="note-category-navbar" href="#7">
					Flowers
				</a>
				<a className="note-category-navbar" href="#8">
					Wood
				</a>
			</div>
			<div className="note-searchbar-container">
				<div className="note-searchbar">
					<input
						type="search"
						name="searchbar"
						placeholder="Search"
						onChange={(term) => {
							setSearchTerm(term.target.value);
						}}
					/>
				</div>
			</div>

			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 1)
					.filter((categ) => {
						if (searchTerm === "") {
							return categ;
						} else {
							return null;
						}
					})
					.map((noteCategory) => (
						<h1 id="1">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter((allNotes) => allNotes.note_category_id === "CITRUS SMELLS")
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>

			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 2)
					.filter((categ) => {
						if (searchTerm === "") {
							return categ;
						} else {
							return null;
						}
					})
					.map((noteCategory) => (
						<h1 id="2">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter(
							(allNotes) =>
								allNotes.note_category_id === "FRUITS, VEGETABLES AND NUTS"
						)
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 3)
					.filter((categ) => {
						if (searchTerm === "") {
							return categ;
						} else {
							return null;
						}
					})
					.map((noteCategory) => (
						<h1 id="3">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter(
							(allNotes) =>
								allNotes.note_category_id === "SWEETS AND GOURMAND SMELLS"
						)
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 4)
					.filter((categ) => {
						if (searchTerm === "") {
							return categ;
						} else {
							return null;
						}
					})
					.map((noteCategory) => (
						<h1 id="4">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter((allNotes) => allNotes.note_category_id === "BEVERAGES")
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 5)
					.filter((categ) => {
						if (searchTerm === "") {
							return categ;
						} else {
							return null;
						}
					})
					.map((noteCategory) => (
						<h1 id="5">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter((allNotes) => allNotes.note_category_id === "SPICES")
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
				<div>
					{allNotes
						.filter(
							(allNotes) =>
								allNotes.note_category_id === "GREENS, HERBS AND FOUGERES"
						)
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
				<div>
					{allNotes
						.filter(
							(allNotes) => allNotes.note_category_id === "RESINS AND BALSAMS"
						)
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 6)
					.filter((categ) => {
						if (searchTerm === "") {
							return categ;
						} else {
							return null;
						}
					})
					.map((noteCategory) => (
						<h1 id="6">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter(
							(allNotes) =>
								allNotes.note_category_id ===
								"NATURAL AND SYNTHETIC, POPULAR AND WEIRD"
						)
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
				<div>
					{allNotes
						.filter(
							(allNotes) =>
								allNotes.note_category_id === "MUSK, AMBER, ANIMALIC SMELLS"
						)
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 7)
					.filter((categ) => {
						if (searchTerm === "") {
							return categ;
						} else {
							return null;
						}
					})
					.map((noteCategory) => (
						<h1 id="7">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter((allNotes) => allNotes.note_category_id === "FLOWERS")
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
				<div>
					{allNotes
						.filter((allNotes) => allNotes.note_category_id === "WHITE FLOWERS")
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 8)
					.filter((categ) => {
						if (searchTerm === "") {
							return categ;
						} else {
							return null;
						}
					})
					.map((noteCategory) => (
						<h1 id="8">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter(
							(allNotes) => allNotes.note_category_id === "WOODS AND MOSSES"
						)
						.filter((val) => {
							if (searchTerm === "") {
								return val;
							} else if (
								val.title.toLowerCase().includes(searchTerm.toLowerCase())
							) {
								return val;
							} else {
								return null;
							}
						})
						.map((val, key) => (
							<>
								<div className="note-items" key={key}>
									<img src={val.photo} alt="note pic" />
									<h4>{val.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
		</>
	);
}

export default Notes;

//Note: all categories code

/* {NotesCategory.map((post) => {
					return (
						<>
							<a href="#2">{post.title}</a>
						</>
					);
				})} */
