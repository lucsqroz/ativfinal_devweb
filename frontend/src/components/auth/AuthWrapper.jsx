import React from 'react';

const AuthWrapper = ({ children }) => {
  return (
    <div className="auth-wrapper">
      {children}
    </div>
  );
};

export default AuthWrapper;
