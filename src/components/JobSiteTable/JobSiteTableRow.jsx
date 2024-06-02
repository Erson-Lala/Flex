import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './JobSiteTableRow.scss';

function JobSiteTableRow({ site, updateStatus }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(site.status);

    const statuses = ['On Road', 'Completed', 'On Hold'];

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
        setDropdownOpen(false);
        updateStatus(site.id, status);
    };

    return (
        <div className="table-row">
            <div>
                <Link to={`/inventory/${site.id}`}>{site.name}</Link>
            </div>
            <div className={`status ${selectedStatus.toLowerCase().replace(' ', '-')}`}>
                <div className="dropdown" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                    {selectedStatus}
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            {statuses.map((status) => (
                                <div
                                    key={status}
                                    className={status.toLowerCase().replace(' ', '-')}
                                    onClick={() => handleStatusChange(status)}
                                >
                                    {status}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

JobSiteTableRow.propTypes = {
    site: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        status: PropTypes.string
    }).isRequired,
    updateStatus: PropTypes.func.isRequired
};

export default JobSiteTableRow;
