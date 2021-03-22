import { render, screen } from '@testing-library/react';
import NameHeader from '../components/NameHeader';

test('renders "Jennifer Openshaw"', () => {
  render(<NameHeader />);
  const name = screen.getByText("Jennifer Openshaw");
  expect(name).toBeInTheDocument();
});

test('renders "Software Engineer"', () => {
    render(<NameHeader />);
    const title = screen.getByText("Software Engineer");
    expect(title).toBeInTheDocument();
  });
