import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import JobSiteTableRow from './JobSiteTableRow';

const jobSite = { id: 1, name: '1658 E 23rd St, Brooklyn, NY 11229, USA', status: 'Completed' };

test('renders JobSiteTableRow with job site name', () => {
    render(
        <MemoryRouter>
            <JobSiteTableRow site={jobSite} updateStatus={jest.fn()} />
        </MemoryRouter>
    );
    const jobSiteName = screen.getByText(/1658 E 23rd St, Brooklyn, NY 11229, USA/i);
    expect(jobSiteName).toBeInTheDocument();
});
