import React, { useState } from 'react';
import StatusHeader from '../../components/StatusHeader';
import JobSiteTable from '../../components/JobSiteTable';
import JobSiteModal from '../../components/JobSiteModal';
import './HomePage.scss';

function HomePage() {
    const [jobSites, setJobSites] = useState([
        { name: '1658 E 23rd St, Brooklyn, NY 11229, USA', status: 'Completed' },
        { name: '1705 E 22nd St, Brooklyn, NY 11229, USA', status: 'On Hold' },
    ]);

    const [isModalOpen, setModalOpen] = useState(false);

    const addJobSite = (jobSite) => {
        setJobSites([...jobSites, jobSite]);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const statusCounts = {
        onRoad: jobSites.filter(site => site.status === 'On Road').length,
        completed: jobSites.filter(site => site.status === 'Completed').length,
        onHold: jobSites.filter(site => site.status === 'On Hold').length,
    };

    return (
        <div className="home-page container">
            <StatusHeader statusCounts={statusCounts} />
            <div className="controls">
                <input type="text" placeholder="Search a job site" />
                <div className="jobsite-form-container">
                    <button className="create-button" onClick={openModal}>Create</button>
                </div>
            </div>
            <JobSiteTable jobSites={jobSites} />
            <JobSiteModal isOpen={isModalOpen} onRequestClose={closeModal} addJobSite={addJobSite} />
        </div>
    );
}

export default HomePage;
