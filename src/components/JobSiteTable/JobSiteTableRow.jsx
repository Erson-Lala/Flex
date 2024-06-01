import React from 'react';
import './JobSiteTableRow.scss';

function JobSiteTableRow({ site }) {
    return (
        <div className="table-row">
            <div>{site.name}</div>
            <div className={`status ${site.status.toLowerCase().replace(' ', '-')}`}>
                {site.status}
            </div>
        </div>
    );
}

export default JobSiteTableRow;
