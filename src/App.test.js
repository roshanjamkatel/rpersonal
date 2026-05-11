import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site navigation', () => {
  render(<App />);
  expect(screen.getByText(/roshan jamkatel/i)).toBeInTheDocument();
  expect(screen.getAllByText(/projects/i).length).toBeGreaterThan(0);
});
