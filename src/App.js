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
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { loggedUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/mymovies' element={loggedUser ? <MyMovies /> : <Movies />} />
            <Route path='/:movieId' element={<MovieDetails />} />
            <Route path='/login' element={!loggedUser ? <Login /> : <Movies />} />
            <Route path='/register' element={!loggedUser ? <Register /> : <Movies />} />
            <Route path='/create' element={loggedUser ? <CreateMovie /> : <Movies />} />
            <Route path='/edit/:movieId' element={loggedUser ? <EditMovie /> : <Movies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
