import React, { useState } from 'react';

import Layout from '../components/Layout';
import Profile from '../components/Profile';
import Projects from '../components/Projects';

const OPEN_WIDTH = 25;

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Layout>
      <div className="leftSide" style={{ width: `${isOpen ? OPEN_WIDTH : 100}%` }}>
        <Profile onClick={handleClick} />
      </div>
      <div
        className="rightSide"
        style={{
          width: `${100 - OPEN_WIDTH}vw`,
          left: `${isOpen ? OPEN_WIDTH : 100}%`,
        }}
      >
        <Projects />
      </div>
    </Layout>
  );
};

export default IndexPage;
