import React from 'react';

import '../styles/components.css';
import '../styles/layout.css';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
