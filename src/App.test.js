import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Job Sites Dashboard heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Job Sites Dashboard/i);
  expect(headingElement).toBeInTheDocument();
});
