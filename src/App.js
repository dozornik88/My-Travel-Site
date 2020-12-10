import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageTwo from "./pages/PageTwo";

function App() {
	return (
		<>
			<Router>
				<div>
					<Layout>
						<Switch>
							<Route path="/pagetwo" component={PageTwo} />
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
