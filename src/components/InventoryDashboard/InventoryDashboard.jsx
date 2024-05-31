import React, { useState } from 'react';
import Modal from 'react-modal';
import './InventoryDashboard.scss';

function InventoryDashboard({ categories, updateCategory }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);

    const handleDoubleClick = (category) => {
        setCurrentCategory(category);
        setModalIsOpen(true);
    };

    const handleSave = () => {
        updateCategory(currentCategory);
        setModalIsOpen(false);
    };

    return (
        <div className="inventory-dashboard">
            {categories.map((category) => (
                <div key={category.id} onDoubleClick={() => handleDoubleClick(category)}>
                    {category.name}
                </div>
            ))}
            <Modal isOpen={modalIsOpen}>
                <h2>Edit Category</h2>
                <input
                    type="text"
                    value={currentCategory ? currentCategory.name : ''}
                    onChange={(e) => setCurrentCategory({ ...currentCategory, name: e.target.value })}
                />
                <button onClick={handleSave} className="button">Save</button>
            </Modal>
        </div>
    );
}

export default InventoryDashboard;
