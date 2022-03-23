import styles from './Home.module.css';

export default function Home() {
  let imgUrl = 'https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif';
  return (
    <div>
      <form className={styles.form_search}>
        <input type="text" placeholder="Search...." />
        <button>
          <span>Search</span>
        </button>
      </form>
      <div className={styles.img_container}>
        <img src={imgUrl} alt="giphy" />
        <a href={imgUrl} target="_blank" rel="noreferrer">
          Source
        </a>
      </div>
    </div>
  );
}
