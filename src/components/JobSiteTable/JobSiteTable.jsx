import React from 'react';
import PropTypes from 'prop-types';
import JobSiteTableRow from './JobSiteTableRow';
import './JobSiteTable.scss';

function JobSiteTable({ jobSites, updateStatus }) {
    return (
        <div className="job-site-table">
            {jobSites.map((site) => (
                <JobSiteTableRow key={site.id} site={site} updateStatus={updateStatus} />
            ))}
        </div>
    );
}

JobSiteTable.propTypes = {
    jobSites: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        status: PropTypes.string
    })).isRequired,
    updateStatus: PropTypes.func.isRequired
};

export default JobSiteTable;
