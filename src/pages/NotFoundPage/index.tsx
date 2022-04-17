import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notfound_container}>
      <h1 className={styles.notfound_header}>404</h1>
      <p className={styles.notfound_msg}>Page not found</p>
      <Link to="/" className={styles.notfound_link}>
        Go to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
