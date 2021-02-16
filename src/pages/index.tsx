import React, { useState } from 'react';

import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Profile from '../components/Profile/Profile';
import Projects from '../components/Projects';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}
const IndexPage: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="author" content={data.site.siteMetadata.author} />
      </Helmet>
      <Layout>
        <div className={`leftSide ${isOpen ? 'open' : 'closed'}`}>
          <Profile onClick={handleClick} />
        </div>

        <div className={`rightSide ${isOpen ? 'open' : 'closed'}`}>
          <Projects />
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
