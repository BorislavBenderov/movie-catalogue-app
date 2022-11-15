import { Header } from './components/header/Header';
import { Banner } from './components/banner/Banner';
import { Movies } from './components/movies/Movies';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Banner />
        <Movies />        
      </main>
      <Footer />
    </div>
  );
}

export default App;
