import styles from './Header.module.css';

type Props = {
  name: string;
  profile_img: string;
};

const Header: React.FC<Props> = ({ name, profile_img }: Props) => {
  return (
    <header className={styles.header}>
      <h1>🎶 PlayliStation</h1>
      {name && (
        <section className={styles.user_profile}>
          <img src={profile_img} className={styles.profile_img} alt="profile_img" />
          <span className={styles.profile_name}>{name}</span>
        </section>
      )}
    </header>
  );
};

export default Header;
