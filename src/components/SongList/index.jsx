import { useState } from 'react';
import { SongDetails } from '../';
import styles from './styles.module.css';
import { usePagination } from '../../hooks';
import { Pagination } from '@material-ui/lab';

export function SongList({ data, handleSelected }) {
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(data.length / PER_PAGE);
  const songData = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    songData.jump(p);
  };
  return (
    <>
      <div className={styles.song_list}>
        {songData.currentData()?.map((song) => {
          return <SongDetails key={song.uri} data={song} data_id={song.uri} handleSelected={handleSelected} />;
        })}
      </div>
      <div className={styles.pagination_container}>
        <Pagination count={count} size="large" page={page} variant="text" shape="rounded" onChange={handleChange} />
      </div>
    </>
  );
}
