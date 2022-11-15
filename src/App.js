import { Header } from './components/header/Header';
import { Banner } from './components/banner/Banner';
import { Movies } from './components/movies/Movies';
import { Footer } from './components/footer/Footer';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { CreateMovie } from './components/create-edit/CreateMovie';
import { EditMovie } from './components/create-edit/EditMovie';

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
