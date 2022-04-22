import styles from './styles.module.css';
import { Button } from '../../ui';

interface Spotify {
  name: Spotify.RootObject['name'];
  external_urls: Spotify.RootObject['external_urls'];
  isSelected: boolean;
  album: Spotify.RootObject['album'];
  artists: Spotify.RootObject['artists'];
}

type Props = {
  data: Spotify;
  data_id: string;
  handleSelected: React.MouseEventHandler<HTMLButtonElement>;
};

const SongDetails = ({ data, data_id, handleSelected }: Props) => {
  const {
    name: songName,
    external_urls: { spotify: songUrl },
    isSelected,
  } = data;
  const {
    name: albumName,
    external_urls: { spotify: albumUrl },
    images: [{ url: albumImage }],
  } = data.album;
  const {
    external_urls: { spotify: artistUrl },
    name: artistName,
  } = data.artists[0];

  return (
    <div
      className={`${styles.song_details} ${isSelected && styles.selected_song}`}
      data-testid="song-details">
      <div className={styles.description}>
        <img className={styles.song_image} src={albumImage} alt="song_details" />
        <div className={styles.metadata}>
          <a href={songUrl}>
            <span className={styles.title}>{songName}</span>
          </a>
          <a href={artistUrl}>
            <span className={styles.artist_name}>{artistName}</span>
          </a>
          <a href={albumUrl} className={styles.album_name}>
            {albumName}
          </a>
        </div>
        <Button
          className={isSelected && styles.btn_selected}
          onClick={handleSelected}
          type="button"
          data_id={data_id}>
          {isSelected ? 'Deselect' : 'Select'}
        </Button>
      </div>
    </div>
  );
};

export default SongDetails;
