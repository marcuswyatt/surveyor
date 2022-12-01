import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Enter your coordinates...');
  expect(inputElement).toBeInTheDocument();
});

