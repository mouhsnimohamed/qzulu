import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Features from '../components/Features';
import Layout from '../components/Layout';

export const OurValuesTemplate = ({ title, description, image, ourValues }) => {
  return (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`
        }}>
        <h2 className="has-text-weight-bold is-size-1 intro-title intro-inline">
          {title}
        </h2>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-10 is-offset-1">
              <p className="costum-p">{description}</p>
            </div>
            <div className="column is-10 is-offset-1">
              <Features gridItems={ourValues} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

OurValuesTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
  ourValues: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    text: PropTypes.string
  })
};

const OurValues = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <OurValuesTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        description={frontmatter.description}
        ourValues={frontmatter.ourValues}
      />
    </Layout>
  );
};

OurValues.propTypes = {
  data: PropTypes.object.isRequired
};

export default OurValues;

export const OurValuesQuery = graphql`
  query OurValues($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        ourValues {
          image {
            childImageSharp {
              fluid(maxWidth: 570, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          text
        }
      }
    }
  }
`;
