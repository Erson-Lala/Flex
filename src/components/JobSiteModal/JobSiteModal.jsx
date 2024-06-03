import React from 'react';
import Modal from 'react-modal';
import './JobSiteModal.scss';

function JobSiteModal({ isOpen, onRequestClose, addJobSite }) {
    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [status, setStatus] = React.useState('');

    const handleSave = () => {
        addJobSite({ name, category, status });
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Create Job Site"
            className="job-site-modal"
            overlayClassName="job-site-modal-overlay"
        >
            <h2>Title</h2>
            <p>Create your JobSite</p>
            <div className="modal-content">
                <label>
                    Name
                    <input
                        type="text"
                        placeholder="Type the jobsite's name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Category Included
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Category1">Category1</option>
                        <option value="Category2">Category2</option>
                        {/* Add more categories as needed */}
                    </select>
                </label>
                <label>
                    Status
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="">Select one</option>
                        <option value="On Road">On Road</option>
                        <option value="Completed">Completed</option>
                        <option value="On Hold">On Hold</option>
                        {/* Add more statuses as needed */}
                    </select>
                </label>
                <div className="modal-actions">
                    <button className="button cancel" onClick={onRequestClose}>
                        Cancel Changes
                    </button>
                    <button className="button save" onClick={handleSave}>
                        Save Changes
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default JobSiteModal;
