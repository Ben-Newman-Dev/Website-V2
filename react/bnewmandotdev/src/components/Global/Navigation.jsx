const Navigation = () => {
	return (
		<div className="navigation-wrapper">
			<img src="https://via.placeholder.com/121x121.png" alt="Logo" />
			<h1>BNewman.dev</h1>
			<div className="link-wrapper">
				<a className="home" href="/">
					Home
				</a>
				<a className="about" href="/about">
					About Me
				</a>
				<a className="projects" href="/">
					My Projects
				</a>
				<a className="devdiary" href="/">
					DevDiary
				</a>
				<a className="links" href="/">
					Links
				</a>
				<a className="contact" href="/">
					Contact Me
				</a>
			</div>
		</div>
	);
};

export default Navigation;
