import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './InventoryItemModal.scss';

Modal.setAppElement('#root');

function InventoryItemModal({ isOpen, onRequestClose, item, onSave }) {
    const [itemName, setItemName] = useState(item?.name || '');
    const [quantity, setQuantity] = useState(item?.quantity || '');
    const [description, setDescription] = useState(item?.description || '');
    const [notes, setNotes] = useState(item?.notes || '');

    const handleSave = () => {
        onSave({
            ...item,
            name: itemName,
            quantity,
            description,
            notes
        });
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Edit Inventory Item"
            className="inventory-item-modal"
            overlayClassName="inventory-item-modal-overlay"
        >
            <h2>Title</h2>
            <p>Informative piece of text that can be used regarding this modal.</p>
            <div className="modal-content">
                <label>
                    Item
                    <input
                        type="text"
                        placeholder="Search & Select Item"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                </label>
                <label>
                    Quantity
                    <input
                        type="number"
                        placeholder="Set Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </label>
                <label>
                    Description
                    <textarea
                        placeholder="Type the description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label>
                    Notes
                    <textarea
                        placeholder="Type a note..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </label>
                <div className="modal-actions">
                    <button className="button cancel" onClick={onRequestClose}>
                        Cancel
                    </button>
                    <button className="button save" onClick={handleSave}>
                        Save Changes
                    </button>
                </div>
            </div>
        </Modal>
    );
}

InventoryItemModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    item: PropTypes.object,
    onSave: PropTypes.func.isRequired
};

InventoryItemModal.defaultProps = {
    item: {}
};

export default InventoryItemModal;
