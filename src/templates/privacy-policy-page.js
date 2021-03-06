import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const PrivacyPolicyPageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="content">
      <div className="full-width-image-container margin-top-0 with-gradient-bg">
        <div className="gradient-static-bg"></div>
        <h4 className="gradient-title is-size-2 has-text-weight-normal">
          Privacy Policy
        </h4>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <h2 className="title is-size-1 has-text-centered has-text-weight-light is-uppercase mb-2">
              {title}
            </h2>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

PrivacyPolicyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const PrivacyPolicyPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PrivacyPolicyPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

PrivacyPolicyPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PrivacyPolicyPage;

export const PrivacyPolicyPageQuery = graphql`
  query PrivacyPolicyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
