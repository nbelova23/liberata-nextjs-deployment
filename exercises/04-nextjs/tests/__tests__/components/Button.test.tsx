import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

function Button({ text, onClick }: any) {
  return <button onClick={onClick}>{text}</button>;
}

test('renders button text', () => {
  render(<Button text="Click me" />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();

  render(<Button text="Click me" onClick={handleClick} />);

  fireEvent.click(screen.getByText('Click me'));

  expect(handleClick).toHaveBeenCalled();
});