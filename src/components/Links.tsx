import React from 'react';
import { FaBeer, FaGithub } from 'react-icons/fa';

const Links: React.FC = () => {
  return (
    <>
      <div>
        <main>
          <h3>
            Lets go for a <FaBeer />?
          </h3>
          <h3>
            Join me on <FaGithub />!
          </h3>
        </main>
      </div>
    </>
  );
};

export default Links;
