import React from 'react';
import ReactDOM from 'react-dom/client'; // Новый импорт для React 18
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Используем createRoot вместо render
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

// Если вы хотите, чтобы приложение работало оффлайн и загружалось быстрее,
// вы можете заменить unregister() на register(). Обратите внимание, что
// это может привести к определённым рискам.
// Подробнее: https://bit.ly/CRA-PWA
serviceWorker.unregister();
