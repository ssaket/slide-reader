import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<Link className="navbar-brand" href="/">Notes from Videos</Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			{/* <div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" activeclassNameName='active' aria-current="page" href="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" activeclassNameName='active' href="/study">Study</Link>
					</li>
				</ul>
			</div> */}
		</div>
	</nav>
);

export default Header;
