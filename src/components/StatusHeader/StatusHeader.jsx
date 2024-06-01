import React from 'react';
import './StatusHeader.scss';

function StatusHeader({ statusCounts }) {
    return (
        <div className="status-header">
            <div className="status-box on-road">
                {statusCounts.onRoad} On Road
            </div>
            <div className="status-box completed">
                {statusCounts.completed} Completed
            </div>
            <div className="status-box on-hold">
                {statusCounts.onHold} On Hold
            </div>
        </div>
    );
}

export default StatusHeader;
