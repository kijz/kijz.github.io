import React from 'react';

import './components.css';
import './layout.css';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
