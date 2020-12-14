import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notes from "./pages/Notes";
import Home from "./pages/Home";
function App() {
	return (
		<>
			<Router>
				<div>
					<Layout>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/notes" component={Notes} />
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
