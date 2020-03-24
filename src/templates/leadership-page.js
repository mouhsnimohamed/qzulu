import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const LeadershipPageTemplate = ({
  content,
  contentComponent,
  banner
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!banner.childImageSharp ? banner.childImageSharp.fluid.src : banner
          })`
        }}></div>
      <section className="section section--gradient">
        <div className="container">
          {/* <PreviewCompatibleImage imageInfo={{ image: imagePage }} /> */}
          <div className="section">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </section>
    </div>
  );
};

LeadershipPageTemplate.propTypes = {
  content: PropTypes.string,
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  contentComponent: PropTypes.func
};

const LeadershipPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <LeadershipPageTemplate
        contentComponent={HTMLContent}
        banner={post.frontmatter.banner}
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
        banner {
          childImageSharp {
            fluid(maxWidth: 1900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
