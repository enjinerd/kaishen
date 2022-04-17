import { useState } from 'react';
import { SongDetails } from '../';
import styles from './styles.module.css';
import { usePagination } from '../../hooks';
// Material Ui
import { Pagination } from '@material-ui/lab';

interface Spotify {
  name: Spotify.RootObject['name'];
  external_urls: Spotify.RootObject['external_urls'];
  isSelected: boolean;
  album: Spotify.RootObject['album'];
  artists: Spotify.RootObject['artists'];
}

type Props = {
  data: Spotify[];
  handleSelected: () => void;
};

const SongList: React.FC<Props> = ({ data, handleSelected }: Props) => {
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(data.length / PER_PAGE);
  const songData = usePagination(data, PER_PAGE);

  const handleChange = (_: unknown, p: number) => {
    setPage(p);
    songData.jump(p);
  };
  return (
    <>
      <div className={styles.song_list}>
        {songData.currentData()?.map((song) => {
          return (
            <SongDetails
              key={song.uri}
              data={song}
              data_id={song.uri}
              handleSelected={handleSelected}
            />
          );
        })}
      </div>
      {/* // Material Ui */}
      <div className={styles.pagination_container}>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="text"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SongList;
