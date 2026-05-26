import { render, screen } from '@testing-library/react';
import Testing from '../../pages/exercises/08-testing';

test('renders testing page', () => {
  render(<Testing />);
  expect(
    screen.getByText('Exercise 8: Testing')
  ).toBeInTheDocument();
});
