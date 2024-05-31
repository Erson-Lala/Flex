import React, { useState } from 'react';
import JobSiteList from '../../components/JobSiteList';
import JobSiteForm from '../../components/JobSiteForm';
import './HomePage.scss';

function HomePage() {
    const [jobSites, setJobSites] = useState([]);

    const addJobSite = (jobSite) => {
        setJobSites([...jobSites, jobSite]);
    };

    return (
        <div className="home-page container">
            <h1>Job Sites</h1>
            <JobSiteForm addJobSite={addJobSite} />
            <JobSiteList jobSites={jobSites} />
        </div>
    );
}

export default HomePage;
