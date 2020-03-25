import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ContentPageTemplate from './content-page-template';

const FutureDeployment = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <ContentPageTemplate
      image={frontmatter.image}
      banner={frontmatter.banner}
      title={frontmatter.title}
      content={html}
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
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        banner {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
