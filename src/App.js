import './App.css';
import data from './data';

function App() {
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
    <div>
      <header>
        <h1>🎶 PlayliStation</h1>
      </header>
      <main>
        <div className="song_details">
          <div className="description">
            <img className="song_image" src={albumImage} alt="song_details" />
            <div className="metadata">
              <a href={songUrl}>
                <span className="title">{songName}</span>
              </a>
              <a href={artistUrl}>
                <span className="artist_name">{artistName}</span>
              </a>
              <a href={albumUrl} className="album_name">
                {albumName}
              </a>
            </div>
          </div>
          <div id="action_btn">
            <button id="select_button">Select</button>
          </div>
        </div>
      </main>
      <footer>
        <p>
          <span>© KM_G2FE2230_Roni Ardiyanto</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
