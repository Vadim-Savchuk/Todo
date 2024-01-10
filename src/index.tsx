import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

import reportWebVitals from './reportWebVitals';

import './styles/globals.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

reportWebVitals();
