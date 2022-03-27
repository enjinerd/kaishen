import './App.css';
import data from './data';
import { SongDetails } from './components';
import { Header, Footer } from './components/ui';

function App() {
  return (
    <div>
      <Header />
      <main className="song_list">
        {data.map((data) => (
          <SongDetails data={data} key={data.id} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
