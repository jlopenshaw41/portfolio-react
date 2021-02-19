import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders "Jennifer Openshaw"', () => {
  render(<App />);
  const name = screen.getByText("Jennifer Openshaw");
  expect(name).toBeInTheDocument();
});
