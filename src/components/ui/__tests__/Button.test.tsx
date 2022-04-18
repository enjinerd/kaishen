import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import Button from '../Button';

test('renders a button', () => {
  render(<Button type="button">Click me</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
