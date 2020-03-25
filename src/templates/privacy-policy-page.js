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
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <h2 className="title is-size-1 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <PageContent className="content" content={content} />
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
