import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import JobSiteTable from './JobSiteTable';

const jobSites = [
    { id: 1, name: '1658 E 23rd St, Brooklyn, NY 11229, USA', status: 'Completed' },
    { id: 2, name: '1705 E 22nd St, Brooklyn, NY 11229, USA', status: 'On Hold' }
];

test('renders JobSiteTable with job sites', () => {
    render(
        <MemoryRouter>
            <JobSiteTable jobSites={jobSites} updateStatus={jest.fn()} />
        </MemoryRouter>
    );
    const firstJobSite = screen.getByText(/1658 E 23rd St, Brooklyn, NY 11229, USA/i);
    expect(firstJobSite).toBeInTheDocument();
});
