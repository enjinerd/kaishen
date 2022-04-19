import { render, screen } from '@testing-library/react';
import React from 'react';
import { Header } from '../';

test('renders the header', () => {
  render(<Header />);
  expect(screen.getByText('🎶 PlayliStation')).toBeInTheDocument();
});
