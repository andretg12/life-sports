import React from 'react'

const Signup = () => {
    return (
        <div>
            <h1 className="text-center">SIGN UP</h1>
            <form className="container mt-5">
                <label className="visuallyhidden" htmlFor="coach-fname">First Name</label>
                <input className="form-control mt-5" type="text" id="coach-fname" placeholder="FIRST NAME"></input>

                <label className="visuallyhidden" htmlFor="coach-lname">Last Name</label>
                <input className="form-control mt-5" type="text" id="coach-lname" placeholder="LAST NAME"></input>

                <label className="visuallyhidden" htmlFor="coach-email">Email</label>
                <input className="form-control mt-5" type="email" id="coach-email" placeholder="EMAIL"></input>

                <label className="visuallyhidden" htmlFor="coach-phone">Phone Number</label>
                <input className="form-control mt-5" type="phone" id="coach-phone" placeholder="PHONE NUMBER"></input>

                <label className="visuallyhidden" htmlFor="coach-address">Address</label>
                <input className="form-control mt-5" type="text" id="coach-address" placeholder="ADDRESS"></input>

                <label className="visuallyhidden" htmlFor="coach-city">City</label>
                <input className="form-control mt-5" type="text" id="coach-city" placeholder="CITY"></input>

                <label className="visuallyhidden" htmlFor="coach-state">State</label>
                <input className="form-control mt-5" type="text" id="coach-state" placeholder="STATE"></input>

                <label className="visuallyhidden" htmlFor="coach-country">Country</label>
                <input className="form-control mt-5" type="text" id="coach-country" placeholder="COUNTRY"></input>

                <label className="visuallyhidden" htmlFor="coach-academy">Academy</label>
                <input className="form-control mt-5" type="text" id="coach-academy" placeholder="ACADEMY"></input>

                <label className="visuallyhidden" htmlFor="coach-location">Location</label>
                <input className="form-control mt-5" type="text" id="coach-location" placeholder="LOCATION"></input>

                <button className="btn btn-secondary mt-5 mb-5" type="submit" value="submit">SIGN UP</button>
            </form>
        </div>
    )
}

export default Signup;