import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './contexts/AuthContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);
