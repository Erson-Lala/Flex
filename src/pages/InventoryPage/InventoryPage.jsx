import React, { useState } from 'react';
import InventoryDashboard from '../../components/InventoryDashboard';
import './InventoryPage.scss';

function InventoryPage({ match }) {
    const { jobSiteId } = match.params;
    const [categories, setCategories] = useState([]);

    const updateCategory = (updatedCategory) => {
        const newCategories = categories.map((category) =>
            category.id === updatedCategory.id ? updatedCategory : category
        );
        setCategories(newCategories);
    };

    return (
        <div className="inventory-page container">
            <h1>Inventory for Job Site {jobSiteId}</h1>
            <InventoryDashboard categories={categories} updateCategory={updateCategory} />
        </div>
    );
}

export default InventoryPage;
