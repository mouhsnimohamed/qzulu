import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BusnissesTemplate from './busnisses.template';

const DeploymentReady = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <BusnissesTemplate
      title={frontmatter.title}
      intro={frontmatter.description}
      blocks={frontmatter.deploymentReady}
    />
  );
};

DeploymentReady.propTypes = {
  data: PropTypes.object.isRequired
};

export default DeploymentReady;

export const DeploymentReadyQuery = graphql`
  query DeploymentReady($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        deploymentReady {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
      }
    }
  }
`;
