import React from 'react';
import { BiAtom } from 'react-icons/bi';

import Avatar from './Avatar';
import Links from '../Links';
import Footer from './Footer';

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

const Profile: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <div className="profile">
      <Avatar />
      <span style={{ display: 'flex', alignItems: 'center' }}>
        Filip Kajzer • <BiAtom />
      </span>
      <div onClick={onClick} className={`projectButton ${isOpen ? 'clicked' : ''}`}>
        <span>Projects</span>
      </div>
      <Links />
      <div style={{ maxWidth: '300px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
