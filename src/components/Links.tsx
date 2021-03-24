import React from 'react';
import { GoMail, GoMarkGithub } from 'react-icons/go';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGameControllerA } from 'react-icons/io';

interface Props {
  href: string;
}

const IconLink: React.FC<Props> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="iconLink">
    {children}
  </a>
);

const Links: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <IconLink href="https://www.linkedin.com/in/filip-kajzer-a65574140/">
        <FaLinkedinIn style={{ width: '20px', height: '20px' }} />
      </IconLink>

      <IconLink href="https://www.github.com/fkajzer">
        <GoMarkGithub style={{ width: '20px', height: '20px' }} />
      </IconLink>

      <IconLink href="mailto:filipkajzer@gmail.com">
        <GoMail style={{ width: '22px', height: '22px' }} />
      </IconLink>

      <IconLink href="https://kjz.itch.io">
        <IoLogoGameControllerA style={{ width: '22px', height: '22px' }} />
      </IconLink>
    </div>
  );
};

export default Links;
