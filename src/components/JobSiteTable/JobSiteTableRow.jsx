import React from 'react';
import { Link } from 'react-router-dom';
import './JobSiteTableRow.scss';

function JobSiteTableRow({ site }) {
    return (
        <div className="table-row">
            <div>
                <Link to={`/inventory/${site.id}`}>{site.name}</Link>
            </div>
            <div className={`status ${site.status.toLowerCase().replace(' ', '-')}`}>
                {site.status}
            </div>
        </div>
    );
}

export default JobSiteTableRow;
