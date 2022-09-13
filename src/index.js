import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);