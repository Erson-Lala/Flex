import React from 'react';
import PropTypes from 'prop-types';
import './InventoryDashboard.scss';

function InventoryDashboard({ jobSite }) {
    const categories = jobSite.categories || [];

    return (
        <div className="inventory-dashboard">
            <h2>Categories</h2>
            {categories.length > 0 ? (
                categories.map((category, index) => (
                    <div key={index} className="category">
                        {category.name}
                    </div>
                ))
            ) : (
                <p>No categories available</p>
            )}
        </div>
    );
}

InventoryDashboard.propTypes = {
    jobSite: PropTypes.shape({
        name: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string
        }))
    })
};

InventoryDashboard.defaultProps = {
    jobSite: {
        categories: []
    }
};

export default InventoryDashboard;
