import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './hooks/useAuth'; // Ajuste o caminho conforme necessário
import App from './App';

import './index.css'; // Garanta que o caminho para o arquivo está correto
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
