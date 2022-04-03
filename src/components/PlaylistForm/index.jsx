import { Button } from '../ui';

export function PlaylistForm({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Playlist Name" name="name" onChange={handleChange} required />
      <input type="text" placeholder="Playlist Description" onChange={handleChange} name="description" />
      <Button type="submit">Create Playlist</Button>
    </form>
  );
}
