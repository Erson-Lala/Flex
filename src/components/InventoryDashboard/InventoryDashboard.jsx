import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import InventoryItemTable from '../InventoryItemTable';
import './InventoryDashboard.scss';

function InventoryDashboard({ jobSite }) {
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

    const services = [
        { id: 1, name: 'Sidewalk Shed', items: [
            { id: 1, name: 'G42295', quantity: 10, description: 'Lorem ipsum dolor sit amet', notes: 'Lorem ipsum dolor sit amet' },
            { id: 2, name: 'M721', quantity: 83, description: 'Lorem ipsum dolor sit amet', notes: 'Lorem ipsum dolor sit amet' },
            { id: 3, name: 'M94796', quantity: 31, description: 'Lorem ipsum dolor sit amet', notes: 'Lorem ipsum dolor sit amet' },
            { id: 4, name: 'S25907', quantity: 47, description: 'Lorem ipsum dolor sit amet', notes: 'Lorem ipsum dolor sit amet' },
        ] },
        { id: 2, name: 'Scaffold', items: [] },
        { id: 3, name: 'Shoring', items: [
            { id: 1, name: 'S12345', quantity: 50, description: 'Shoring equipment item 1', notes: 'Notes for item 1' },
            { id: 2, name: 'S67890', quantity: 20, description: 'Shoring equipment item 2', notes: 'Notes for item 2' }
        ]}
    ];

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    return (
        <div className="inventory-dashboard">
            <div className="sidebar">
                <h2>{jobSite.name}</h2>
                <div className="service-list">
                    {services.map(service => (
                        <button
                            key={service.id}
                            onClick={() => handleServiceClick(service)}
                            className={selectedService?.id === service.id ? 'selected' : ''}
                        >
                            {service.name}
                        </button>
                    ))}
                </div>
                <button className="go-back" onClick={() => navigate(-1)}>
                     Go Back <span className="arrow">&larr;</span>
                </button>
            </div>
            <div className="data-grid">
                {selectedService ? (
                    <InventoryItemTable items={selectedService.items} />
                ) : (
                    <div className="placeholder">
                        <p>No Service Selected</p>
                        <p>Please select a service on your left to proceed.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

InventoryDashboard.propTypes = {
    jobSite: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
};

export default InventoryDashboard;
