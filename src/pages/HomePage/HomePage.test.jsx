import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Modal from 'react-modal';

Modal.setAppElement(document.createElement('div'));

test('renders HomePage with create button', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    );
    const createButton = screen.getByText(/Create/i);
    expect(createButton).toBeInTheDocument();
});
