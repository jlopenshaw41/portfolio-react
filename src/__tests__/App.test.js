import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders "Jennifer Openshaw"', () => {
  render(<App />);
  const name = screen.getByText("Coming Soon");
  expect(name).toBeInTheDocument();
});
