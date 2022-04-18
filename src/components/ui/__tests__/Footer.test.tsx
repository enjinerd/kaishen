import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from '../Footer';

test('renders Footer', () => {
  render(<Footer />);
  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument();
});
