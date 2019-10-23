import React from "../../node_modules/react";
import { Link } from "../../node_modules/react-router-dom";

<<<<<<< HEAD
function Navbar(){ 
    return (
      <nav className="navbar navbar-light navbar-expand-lg" style={{backgroundColor: "#FBCA1E"}}>
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
        <Link to="/" className="navbar-brand">LIFESPORTS</Link>
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">STUDENTS</Link>
          </li>
          <li className="navbar-item">
          <Link to="/resources" className="nav-link">RESOURCES</Link>
          </li>
          <li className="navbar-item">
          <Link to="/student/signup" className="nav-link">ADD STUDENT</Link>
          </li>
          <li className="navbar-item">
            <Link to="/coach/signup" className="nav-link">ADD COACH</Link>
          </li>
          <li>
            <Link to="/exercise" className="nav-link">EXERCISES</Link>
          </li>
        </ul>
        </div>
      </nav>
    //   <BrowserRouter>
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="nav navbar-nav navbar-right ml-auto">
    //         <li className="nav-item">
    //           {/* Using <NavLink> to be able to target active for a more user friendly active page different color button */}
    //           <NavLink exact className="btn text-white" to="/">
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink exact className="btn text-white" to="/products">
    //             Products
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink exact className="btn text-white" to="/contactform">
    //             Contact
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    //   {/* This is where the routing paths are determined */}
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/products" component={ProductsPage} />
    //     <Route exact path="/contactform" component={Contact} />
    //   </Switch>
    // </BrowserRouter>
//   );
// };
    );  
=======
function Navbar() {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<Link to="/" className="navbar-brand">
				LifeSports
			</Link>
			<div className="collpase navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<Link to="/" className="nav-link">
							Exercises
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/create" className="nav-link">
							Post New Workout
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/user" className="nav-link">
							Create User
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
>>>>>>> c0d1e4b069a06438371d2eaab8ecf096eef669af
}
export default Navbar;
