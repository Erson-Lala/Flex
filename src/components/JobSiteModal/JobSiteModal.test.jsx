import React from 'react';
import { render, screen } from '@testing-library/react';
import JobSiteModal from './JobSiteModal';
import Modal from 'react-modal';

Modal.setAppElement(document.createElement('div'));

test('renders JobSiteModal with title', () => {
    render(<JobSiteModal isOpen={true} onRequestClose={jest.fn()} addJobSite={jest.fn()} />);
    const modalTitle = screen.getByText(/Create your JobSite/i);
    expect(modalTitle).toBeInTheDocument();
});
