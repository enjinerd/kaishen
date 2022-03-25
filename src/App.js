import './App.css';
import data from './data';
import { SongDetails } from './components';
import { Header, Footer } from './components/ui';

function App() {
  return (
    <div>
      <Header />
      <main>
        <SongDetails data={data} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
