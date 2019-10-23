import React from 'react';

const AddResource = (location, locations, academies, academy) => {
    return (
        <div>
            <h1>RESOURCES</h1>
            <form>
                <label className="visuallyhidden" htmlFor="resource-type">Resource Type</label>
                <select className="form-control" name="resource-type" id="resource-type">
                    <option>Academic</option>
                    <option>Sports</option>
                </select>

                <label className="visuallyhidden" htmlFor="resource-academy">Academy</label>
                <select className="form-control" name="academy" id="resource-type">
                    <option defaultValue>{academy}</option>
                    {academies.map((academy, i) => <option key={i}>{academy}</option>)}
                </select>

                <label className="visuallyhidden" htmlFor="resource-location">Location</label>
                <select className="form-control" name="location" id="resource-location">
                    <option defaultValue>{location}</option>
                    {locations.map((location, i) => <option key={i}>{location}</option>)}
                </select>

                <label className="visuallyhidden" htmlFor="resource-title">Title</label>
                <input type="text" name="title" id="resource-title" placeholder="TITLE"></input>

                <label className="visuallyhidden" htmlFor="resource-url">URL</label>
                <input className="form-control" name="url" id="resource-url" placeholder="URL"></input>

                <submit value="submit">SAVE</submit>
            </form>
        </div>
    )
}

export default AddResource;