import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText((content, element) => {
    // Überprüfe, ob der Text mit "learn react" beginnt
    return content.startsWith('learn react');
  });
  expect(linkElement).toBeInTheDocument();
});


