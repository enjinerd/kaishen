import { Button } from '../ui';

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PlaylistForm: React.FC<Props> = ({ handleSubmit, handleChange }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Playlist Name"
        name="name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Playlist Description"
        onChange={handleChange}
        name="description"
      />
      <Button type="submit">Create Playlist</Button>
    </form>
  );
};

export default PlaylistForm;
