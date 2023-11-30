import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container text-center">
        <span className="text-muted">&copy; {new Date().getFullYear()} TodoList Bombado. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
