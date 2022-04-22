import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { SongSearch } from '../index';

const handleQuery = jest.fn();
const handleSearch = jest.fn();

describe('renders PlaylistForm', () => {
  it('renders the search bar', () => {
    render(<SongSearch handleSearch={handleSearch} handleQuery={handleQuery} />);
    expect(screen.getByTestId('form-search')).toBeInTheDocument();
  });
  it('fire input search', () => {
    render(<SongSearch handleSearch={handleSearch} handleQuery={handleQuery} />);
    const input = screen.getByTestId('input-search');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleQuery).toHaveBeenCalled();
  });
});
