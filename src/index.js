import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './contexts/AuthContext';
import { MovieContextProvider } from './contexts/MovieContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <MovieContextProvider>
            <App />
        </MovieContextProvider>
    </AuthContextProvider>
);
