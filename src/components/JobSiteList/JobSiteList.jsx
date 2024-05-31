import React from 'react';
import { Link } from 'react-router-dom';
import './JobSiteList.scss';

function JobSiteList({ jobSites }) {
    return (
        <ul className="job-site-list">
            {jobSites.map((site, index) => (
                <li key={index}>
                    <Link to={`/inventory/${site.id}`}>{site.name}</Link>
                </li>
            ))}
        </ul>
    );
}

export default JobSiteList;
