import React from 'react';

import Avatar from './Avatar';
import Links from '../Links';

interface Props {
  onClick: () => void;
}

const Profile: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="profile">
      <Avatar />
      <span>Filip Kajzer</span>
      <button onClick={onClick} className="projectButton">
        Projects
      </button>
      <Links />
    </div>
  );
};

export default Profile;
