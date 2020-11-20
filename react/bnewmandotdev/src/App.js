import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import Links from "./pages/Links";

import { Switch, Route } from "react-router-dom";
import DevDiary from "./pages/DevDiary";
import ContactMe from "./pages/ContactMe";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about" exact>
					<AboutMe />
				</Route>
				<Route path="/projects" exact>
					<MyProjects />
				</Route>
				<Route path="/devdiary" exact>
					<DevDiary />
				</Route>
				<Route path="/links" exact>
					<Links />
				</Route>
				<Route path="/contact" exact>
					<ContactMe />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
