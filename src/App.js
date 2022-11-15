import { Header } from './components/header/Header';
import { Banner } from './components/banner/Banner';
import { Movies } from './components/movies/Movies';
import { Footer } from './components/footer/Footer';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';

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
