import React, { useState } from 'react';
import StatusHeader from '../../components/StatusHeader';
import JobSiteTable from '../../components/JobSiteTable';
import JobSiteModal from '../../components/JobSiteModal';
import './HomePage.scss';

function HomePage() {
    const [jobSites, setJobSites] = useState([
        { id: 1, name: '1658 E 23rd St, Brooklyn, NY 11229, USA', status: 'Completed' },
        { id: 2, name: '1705 E 22nd St, Brooklyn, NY 11229, USA', status: 'On Hold' },
        { id: 3, name: '123 Main St, New York, NY 10001, USA', status: 'On Road' },
        { id: 4, name: '456 Maple Ave, Queens, NY 11101, USA', status: 'Completed' },
        { id: 5, name: '789 Elm St, Bronx, NY 10451, USA', status: 'On Hold' },
        { id: 6, name: '987 Oak St, Staten Island, NY 10301, USA', status: 'On Road' },
        { id: 7, name: '654 Pine St, Brooklyn, NY 11230, USA', status: 'Completed' },
        { id: 8, name: '321 Birch St, Manhattan, NY 10002, USA', status: 'On Hold' },
        { id: 9, name: '213 Cedar St, Brooklyn, NY 11232, USA', status: 'On Road' },
        { id: 10, name: '678 Spruce St, Queens, NY 11432, USA', status: 'Completed' },
        { id: 11, name: '876 Ash St, Bronx, NY 10457, USA', status: 'On Hold' },
        { id: 12, name: '543 Walnut St, Staten Island, NY 10304, USA', status: 'On Road' },
        { id: 13, name: '432 Chestnut St, Brooklyn, NY 11208, USA', status: 'Completed' },
        { id: 14, name: '987 Willow St, Manhattan, NY 10027, USA', status: 'On Hold' },
        { id: 15, name: '321 Poplar St, Brooklyn, NY 11206, USA', status: 'On Road' },
        { id: 16, name: '654 Cypress St, Queens, NY 11385, USA', status: 'Completed' }
    ]);

    const [searchQuery, setSearchQuery] = useState('');
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

    const updateStatus = (id, status) => {
        const updatedJobSites = jobSites.map(site =>
            site.id === id ? { ...site, status } : site
        );
        setJobSites(updatedJobSites);
    };

    const statusCounts = {
        onRoad: jobSites.filter(site => site.status === 'On Road').length,
        completed: jobSites.filter(site => site.status === 'Completed').length,
        onHold: jobSites.filter(site => site.status === 'On Hold').length,
    };

    const filteredJobSites = jobSites.filter(site =>
        site.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="home-page container">
            <StatusHeader statusCounts={statusCounts} />
            <div className="controls">
                <input
                    type="text"
                    placeholder="Search a job site"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="jobsite-form-container">
                    <button className="create-button" onClick={openModal}>Create</button>
                </div>
            </div>
            <JobSiteTable jobSites={filteredJobSites} updateStatus={updateStatus} />
            <JobSiteModal isOpen={isModalOpen} onRequestClose={closeModal} addJobSite={addJobSite} />
        </div>
    );
}

export default HomePage;
