const Navigation = () => {
	let url = window.location.pathname;
	let a = {};
	let b = {};
	let c = {};
	let d = {};
	let e = {};
	let f = {};
	switch (url) {
		case "/devdiary":
			d = { backgroundColor: "#ef7c1a" };
			break;
		case "/projects":
			c = { backgroundColor: "#ef7c1a" };
			break;
		case "/about":
			b = { backgroundColor: "#ef7c1a" };
			break;
		case "/":
			a = { backgroundColor: "#ef7c1a" };
			break;
		default:
			break;
	}
	return (
		<div className="navigation-wrapper">
			<img src="https://via.placeholder.com/121x121.png" alt="Logo" />
			<h1>BNewman.dev</h1>
			<div className="link-wrapper">
				<a style={a} className="home" href="/">
					Home
				</a>
				<a style={b} className="about" href="/about">
					About Me
				</a>
				<a style={c} className="projects" href="/projects">
					My Projects
				</a>
				<a style={d} className="devdiary" href="/devdiary">
					DevDiary
				</a>
				<a style={e} className="links" href="/">
					Links
				</a>
				<a style={f} className="contact" href="/">
					Contact Me
				</a>
			</div>
		</div>
	);
};

export default Navigation;
