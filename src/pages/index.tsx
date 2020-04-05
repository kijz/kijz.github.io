import React, { useState } from 'react';

import Layout from '../components/Layout';
import Profile from '../components/Profile/Profile';
import Projects from '../components/Projects';

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Layout>
      <div className={`leftSide ${isOpen ? 'open' : 'closed'}`}>
        <Profile onClick={handleClick} />
      </div>

      <div className={`rightSide ${isOpen ? 'open' : 'closed'}`}>
        <Projects />
      </div>
    </Layout>
  );
};

export default IndexPage;
