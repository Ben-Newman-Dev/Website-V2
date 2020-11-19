import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

import { Switch, Route } from "react-router-dom";

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
			</Switch>
		</div>
	);
}

export default App;
