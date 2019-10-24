import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom"

const Resources = () => {
	return (
		<div>
			<h1 className="text-center">RESOURCES</h1>
			<a className="btn btn-secondary ml-2" href="#academic">
				Academic
			</a>
			<a className="btn btn-secondary ml-2" href="#sports">
				Sports
			</a>
            <div className="container mt-5">
			<div id="academic">
				<h2>Academic</h2>
				<div className="mt-3 mb-5">
					<h3>Scientific Study Tips</h3>
					<ReactPlayer
						url="https://www.youtube.com/watch?v=p60rN9JEapg"
						light
						width="100"
						height="100"
					/>
				</div>
				<div className="mt-3 mb-5">
					<h3>How to Excell at School</h3>
					<ReactPlayer
						url="https://www.youtube.com/watch?v=CPxSzxylRCI"
						light
						width="100"
						height="100"
					/>
				</div>
				<div className="mt-3 mb-5">
					<h3>Tips for Highschool Freshmen</h3>
					<ReactPlayer
						url="hhttps://www.youtube.com/watch?v=3MdWw1Imjn0"
						light
						width="100"
						height="100"
					/>
				</div>
			</div>
			<div id="sports">
				<h2>Sports</h2>
				<div className="mt-5 mb-5">
					<h3>Basketball Drills for Beginners</h3>
					<ReactPlayer
						url="https://www.youtube.com/watch?v=2lFq7T6pmu8"
						light
						width="100"
						height="100"
					/>
				</div>
				<div className="mt-5 mb-5">
					<h3>How to Shoot a Basketball for Beginners</h3>
					<ReactPlayer
						url="https://www.youtube.com/watch?v=BloEnNbz4qk"
						light
						width="100"
						height="100"
					/>
				</div>
				<div className="mt-5 mb-5">
					<h3>Best 1 on 1 Basketball Moves</h3>
					<ReactPlayer
						url="https://www.youtube.com/watch?v=JZEVLrA2UMg"
						light
						width="100"
						height="100"
					/>
				</div>
                </div>
			</div>
            <Link to="/addresource" className="btn nav-link lifesports">ADD RESOURCE</Link>
		</div>
	);
};

export default Resources;
