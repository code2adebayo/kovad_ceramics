import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './contextStore/StoreProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import './index.css';

const rootElement = document.getElementById('app');

if (rootElement && rootElement.hasChildNodes()) {
  // If the root element has child nodes, it means the HTML was server-rendered.
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <StoreProvider>
        <BrowserRouter>
          <App tab="home" />
        </BrowserRouter>
      </StoreProvider>
    </React.StrictMode>
  );
} else {
  // Otherwise, create a new root and render.
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <StoreProvider>
        <BrowserRouter>
          <App tab="home" />
        </BrowserRouter>
      </StoreProvider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
