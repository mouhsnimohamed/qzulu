import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const LeadershipPageTemplate = ({
  title,
  content,
  contentComponent,
  image,
  heading
}) => {
  const PageContent = contentComponent || Content;

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
          {/* <PreviewCompatibleImage imageInfo={{ image: imagePage }} /> */}
          <div className="section">
            <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
              {heading}
            </h2>
            <PageContent className="content" content={content} />
          </div>
        </div>
      </section>
    </div>
  );
};

LeadershipPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // imagePage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  contentComponent: PropTypes.func
};

const LeadershipPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <LeadershipPageTemplate
        contentComponent={HTMLContent}
        // imagePage={post.frontmatter.imagePage}
        image={post.frontmatter.image}
        heading={post.frontmatter.heading}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

LeadershipPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default LeadershipPage;

export const LeadershipPageQuery = graphql`
  query LeadershipPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
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
