import styles from './styles.module.css';
import { Button } from '../ui';

export function SongDetails({ data, dataId, handleSelected }) {
  const {
    name: songName,
    external_urls: { spotify: songUrl },
  } = data;
  const {
    name: albumName,
    external_urls: { spotify: albumUrl },
    images: [{ url: albumImage }],
  } = data?.album;
  const {
    external_urls: { spotify: artistUrl },
    name: artistName,
  } = data?.artists[0];

  return (
    <div className={styles.song_details}>
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
      </div>
      <div id="action_btn">
        <Button onClick={handleSelected} dataId={dataId}>
          Select
        </Button>
      </div>
    </div>
  );
}
