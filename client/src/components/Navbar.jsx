import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<nav
				className="navbar navbar-light navbar-expand-lg"
				style={{ backgroundColor: "#FBCA1E" }}
			>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<h2 className="navbar-brand">
						LIFESPORTS
					</h2>
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<Link to="/" className="nav-link">
								STUDENTS
							</Link>
						</li>
            <li className="navbar-item">
							<Link to="/login" className="nav-link">
								LOGIN
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/resources" className="nav-link">
								RESOURCES
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/student/signup" className="nav-link">
								ADD STUDENT
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/coach/signup" className="nav-link">
								ADD COACH
							</Link>
						</li>
						<li>
							<Link to="/exercise" className="nav-link">
								EXERCISES
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
export default Navbar;
