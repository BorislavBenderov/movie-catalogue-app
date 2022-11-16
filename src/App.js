import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Movies } from './components/movies/Movies';
import { Footer } from './components/footer/Footer';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { CreateMovie } from './components/create-edit/CreateMovie';
import { EditMovie } from './components/create-edit/EditMovie';
import { MovieDetails } from './components/movies/movie-details/MovieDetails';
import { MyMovies } from './components/movies/mymovies/MyMovies';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/mymovies' element={<MyMovies />} />
            <Route path='/:movieId' element={<MovieDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<CreateMovie />} />
            <Route path='/edit/:movieId' element={<EditMovie />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
