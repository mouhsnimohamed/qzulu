import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BusnissesTemplate from './busnisses.template';

const FutureDeployment = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <BusnissesTemplate
      title={frontmatter.title}
      intro={frontmatter.description}
      blocks={frontmatter.futureDeployment}
    />
  );
};

FutureDeployment.propTypes = {
  data: PropTypes.object.isRequired
};

export default FutureDeployment;

export const FutureDeploymentQuery = graphql`
  query FutureDeployment($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        futureDeployment {
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
