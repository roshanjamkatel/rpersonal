import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site navigation', () => {
  render(<App />);
  expect(screen.getByText(/roshan jamkatel/i)).toBeInTheDocument();
  expect(screen.getByText(/projects/i)).toBeInTheDocument();
});
