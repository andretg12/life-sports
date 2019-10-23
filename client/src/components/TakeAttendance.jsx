import React from 'react';

const TakeAttendance = () => {
    return (
        <div>
            <h1 className="text-center">ATTENDANCE</h1>
            <div className="container">
                <p>Student Name</p>
                <form>
                    <label className="visuallyhidden">Date</label>
                    <input className="form-control" type="date"></input>
                    <button className="btn btn-secondary" type="submit" value="submit">SAVE</button>
                </form>

            </div>
        </div>
    )
}

export default TakeAttendance;