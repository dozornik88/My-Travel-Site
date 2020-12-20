import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notes from "./pages/Notes";
import Home from "./pages/Home";
import NoteDescription from "./pages/NoteDescription";
import Perfumes from "./pages/Perfumes";

function App() {
	return (
		<>
			<Router>
				<div>
					<Layout>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/notes" component={Notes} />
							<Route
								path="/note-description/:title"
								component={NoteDescription}
							/>
							<Route path="/perfumes" component={Perfumes} />
							<Route path="/contact" component={Contact} />
							<Route path="/about" component={About} />
						</Switch>
					</Layout>
				</div>
			</Router>
		</>
	);
}

export default App;
