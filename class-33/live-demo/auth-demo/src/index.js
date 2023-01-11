import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SettingsProvider from './Context/Settings';
import AuthProvider from './Context/Auth';
import ModeProvider from './Context/Mode';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <ModeProvider>
          <SettingsProvider>
            <App />
          </SettingsProvider>
        </ModeProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);
