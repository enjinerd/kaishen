import styles from './SongSearch.module.css';
import { Button } from '../../ui';

type Props = {
  handleQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SongSearch = ({ handleQuery, handleSearch }: Props) => {
  return (
    <div className={styles.form_container}>
      <form
        className="flex flex-row gap-3 items-center justify-center"
        data-testid="form-search">
        <input
          type="text"
          placeholder="Search"
          onChange={handleQuery}
          data-testid="input-search"
        />
        <Button type="submit" onClick={handleSearch}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default SongSearch;
