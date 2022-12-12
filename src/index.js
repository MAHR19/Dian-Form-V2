import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client' // Nueva forma a partir de React 18

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    
);

