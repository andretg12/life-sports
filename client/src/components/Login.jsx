import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <h1 className="text-center">Login</h1>
            <form className="row">
                <label className="visuallyhidden" htmlFor="username">Username</label>
                <input className="form-control mt-5" type="text" id="username" placeholder="USERNAME"></input>

                <label className="visuallyhidden" htmlFor="password">Password</label>
                <input className="form-control mt-5" type="password" id="password" placeholder="PASSWORD"></input>


                <button className="btn btn-secondary mt-5" type="submit" value="LOGIN">LOGIN</button>
            </form>
        </div>
    )
}

export default Login;