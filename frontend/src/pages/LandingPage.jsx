import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/globals.css'

const LandingPage = () => {
  return (
    <div className="container">
      <header className="jumbotron my-5">
        <h1 className="display-3">Bem-vindo ao TodoList Bombado!</h1>
        <p className="lead">Organize suas tarefas de forma eficiente e fácil.</p>
        <hr className="my-4" />
        <p>Clique no botão abaixo para começar a gerenciar suas tarefas agora mesmo.</p>
        <p className="lead">
          <Link to="/login" className="btn btn-primary btn-lg" role="button">Login</Link>
          <Link to="/register" className="btn btn-secondary btn-lg ml-2" role="button">Registrar</Link>
        </p>
      </header>
    </div>
  );
};

export default LandingPage;
