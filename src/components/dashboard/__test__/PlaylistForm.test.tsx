import { render, screen } from '@testing-library/react';
import React from 'react';
import { PlaylistForm } from '../index';

const handleChange = jest.fn();
const handleSubmit = jest.fn();

test('renders PlaylistForm', () => {
  render(
    <PlaylistForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isOpenState={true}
    />,
  );
  // check if the form is rendered
  expect(screen.getByTestId('playlist-form')).toBeInTheDocument();
});
