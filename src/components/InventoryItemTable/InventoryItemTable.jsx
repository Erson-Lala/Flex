import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InventoryItemModal from '../InventoryItemModal';
import './InventoryItemTable.scss';

function InventoryItemTable({ items }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedItem(null);
    };

    const handleSave = (updatedItem) => {
        console.log('Updated Item:', updatedItem);
        closeModal();
    };

    return (
        <div className="inventory-item-table">
            <h3>Sidewalk Shed</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nr.</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.id} onClick={() => openModal(item)}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.description}</td>
                            <td>{item.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <InventoryItemModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                item={selectedItem}
                onSave={handleSave}
            />
        </div>
    );
}

InventoryItemTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        quantity: PropTypes.number,
        description: PropTypes.string,
        notes: PropTypes.string
    })).isRequired
};

export default InventoryItemTable;
