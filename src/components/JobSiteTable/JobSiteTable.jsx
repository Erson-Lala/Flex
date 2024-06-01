import React from 'react';
import JobSiteTableRow from './JobSiteTableRow';
import './JobSiteTable.scss';

function JobSiteTable({ jobSites }) {
    return (
        <div className="job-site-table">
            <div className="table-header">
                <div>Jobsite Name</div>
                <div>Status</div>
            </div>
            <div className="table-body">
                {jobSites.map((site, index) => (
                    <JobSiteTableRow key={index} site={site} />
                ))}
            </div>
        </div>
    );
}

export default JobSiteTable;
