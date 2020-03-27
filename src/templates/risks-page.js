import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ContentPageTemplate from './content-page-template';

const Risks = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <ContentPageTemplate
      filesList={frontmatter.filesList || undefined}
      image={frontmatter.image}
      banner={frontmatter.banner}
      title={frontmatter.title}
      content={html}
    />
  );
};

Risks.propTypes = {
  data: PropTypes.object.isRequired
};

export default Risks;

export const RisksQuery = graphql`
  query Risks($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        filesList {
          title
          file {
            absolutePath
            dir
            publicURL
          }
        }
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
