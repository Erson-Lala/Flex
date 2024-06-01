import React, { useState } from 'react';
import StatusHeader from '../../components/StatusHeader';
import JobSiteTable from '../../components/JobSiteTable';
import JobSiteModal from '../../components/JobSiteModal';
import './HomePage.scss';

function HomePage() {
    const [jobSites, setJobSites] = useState([
        { name: '1658 E 23rd St, Brooklyn, NY 11229, USA', status: 'Completed' },
        { name: '1705 E 22nd St, Brooklyn, NY 11229, USA', status: 'On Hold' },
        { name: '123 Main St, New York, NY 10001, USA', status: 'On Road' },
        { name: '456 Maple Ave, Queens, NY 11101, USA', status: 'Completed' },
        { name: '789 Elm St, Bronx, NY 10451, USA', status: 'On Hold' },
        { name: '987 Oak St, Staten Island, NY 10301, USA', status: 'On Road' },
        { name: '654 Pine St, Brooklyn, NY 11230, USA', status: 'Completed' },
        { name: '321 Birch St, Manhattan, NY 10002, USA', status: 'On Hold' },
        { name: '213 Cedar St, Brooklyn, NY 11232, USA', status: 'On Road' },
        { name: '678 Spruce St, Queens, NY 11432, USA', status: 'Completed' },
        { name: '876 Ash St, Bronx, NY 10457, USA', status: 'On Hold' },
        { name: '543 Walnut St, Staten Island, NY 10304, USA', status: 'On Road' },
        { name: '432 Chestnut St, Brooklyn, NY 11208, USA', status: 'Completed' },
        { name: '987 Willow St, Manhattan, NY 10027, USA', status: 'On Hold' },
        { name: '321 Poplar St, Brooklyn, NY 11206, USA', status: 'On Road' },
        { name: '654 Cypress St, Queens, NY 11385, USA', status: 'Completed' }
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
