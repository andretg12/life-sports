import React from 'react';

const AddResource = ({ location, locations, academies, academy }) => {
    return (
        <div>
            <h1 className="text-center">RESOURCES</h1>
            <form className="container">
                <label className="visuallyhidden" htmlFor="resource-type">Resource Type</label>
                <select className="form-control mt-5" name="resource-type" id="resource-type">
                    <option>Academic</option>
                    <option>Sports</option>
                </select>

                <label className="visuallyhidden" htmlFor="resource-academy">Academy</label>
                <select className="form-control mt-5" name="academy" id="resource-type">
                    <option defaultValue>{academy}</option>
                    {academies.map((academy, i) => <option key={i}>{academy}</option>)}
                </select>

                <label className="visuallyhidden" htmlFor="resource-location">Location</label>
                <select className="form-control mt-5" name="location" id="resource-location">
                    <option defaultValue>{location}</option>
                    {locations.map((location, i) => <option key={i}>{location}</option>)}
                </select>

                <label className="visuallyhidden" htmlFor="resource-title">Title</label>
                <input className="form-control mt-5" type="text" name="title" id="resource-title" placeholder="TITLE"></input>

                <label className="visuallyhidden" htmlFor="resource-url">URL</label>
                <input className="form-control mt-5" name="url" id="resource-url" placeholder="VIDEO URL"></input>

                <input type="submit" value="SAVE" className="mt-5 btn btn-secondary" value="input"></input>
            </form>
        </div>
    )
}

export default AddResource;