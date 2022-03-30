import './App.css';
import data from './data';
import { SongDetails } from './components';
import { Header, Footer } from './components/ui';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Header />
      <main className="song_list">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
