import React from 'react';

const Login = () => {
    return (
        <div>
<<<<<<< HEAD
            <h1 className="text-center">Login</h1>
            <div className="container">
                <form className="row">
                    <label className="visuallyhidden" htmlFor="username">Username</label>
                    <input className="form-control mt-5 ml-5 mr-5" type="text" id="username" placeholder="USERNAME"></input>

                    <label className="visuallyhidden" htmlFor="password">Password</label>
                    <input className="form-control mt-5 ml-5 mr-5" type="password" id="password" placeholder="PASSWORD"></input>


                    <button className="btn btn-secondary mt-5 ml-5 mb-5" type="submit" value="LOGIN">LOGIN</button>
                </form>
            </div>
=======
        <h1 className="text-center">LOGIN</h1>
        <div className="container">
            <form className="row">
                <label className="visuallyhidden" htmlFor="username">Username</label>
                <input className="form-control mt-5 ml-5 mr-5" type="text" name="username" id="username" placeholder="USERNAME"></input>

                <label className="visuallyhidden" htmlFor="password">Password</label>
                <input className="form-control mt-5 ml-5 mr-5" type="password" name="password" id="password" placeholder="PASSWORD"></input>


                <submit className="btn btn-secondary mt-5 ml-5 mb-5" type="submit" value="LOGIN">LOGIN</submit>
            </form>
        </div>
>>>>>>> fd88865132ba41a34fca03947c1a2bdc43c62936
        </div>
    )
}

export default Login;