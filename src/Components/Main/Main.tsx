import React from 'react';

export const Main: React.FC = ({ children }) => (
  <main className="main">
    <div className="container">
      {children}
    </div>
  </main>
);
