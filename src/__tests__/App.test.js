import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders "Jennifer Openshaw"', () => {
  render(<App />);
  const text = screen.getByText("Coming Soon");
  expect(text).toBeInTheDocument();
});
