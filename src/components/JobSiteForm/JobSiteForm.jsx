import React, { useState } from 'react';
import './JobSiteForm.scss';

function JobSiteForm({ addJobSite }) {
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addJobSite({ id, name });
        setName('');
        setId('');
    };

    return (
        <form onSubmit={handleSubmit} className="job-site-form">
            <input
                type="text"
                placeholder="Job Site Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Job Site ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button type="submit" className="button">Create</button>
        </form>
    );
}

export default JobSiteForm;
