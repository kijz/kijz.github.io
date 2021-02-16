import React from 'react';

import '../styles/layout.css';
import '../styles/components.css';

const Layout: React.FC = ({ children }) => {
  return <main className="content">{children}</main>;
};

export default Layout;
