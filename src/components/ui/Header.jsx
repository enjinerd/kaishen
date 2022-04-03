import styles from './Header.module.css';

export function Header({ name, profile_img }) {
  return (
    <header className={styles.header}>
      <h1>🎶 PlayliStation</h1>
      {name && (
        <section className={styles.user_profile}>
          <img src={profile_img} className={styles.profile_img} />
          <span className={styles.profile_name}>{name}</span>
        </section>
      )}
    </header>
  );
}
