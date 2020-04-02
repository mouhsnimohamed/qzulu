import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const ContentPageTemplate = ({
  title,
  banner,
  image,
  content,
  filesList
}) => {
  const PageContent = HTMLContent;
  return (
    <Layout>
      <div className="content">
        {banner ? (
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url(${
                !!banner.childImageSharp
                  ? banner.childImageSharp.fluid.src
                  : banner
              })`
            }}>
            {title && (
              <h2 className="has-text-weight-bold is-size-1 intro-title intro-inline">
                {title}
              </h2>
            )}
          </div>
        ) : (
          <div className="full-width-image-container margin-top-0 with-gradient-bg">
            <div className="gradient-static-bg"></div>
            {title && (
              <h4 className="gradient-title is-size-2 has-text-weight-normal">
                {title}
              </h4>
            )}
          </div>
        )}
        <section className="section section--gradient">
          <div className="container content">
            <div className="columns is-multiline">
              <div className="column is-8 is-offset-2">
                <div className="section">
                  {image && <PreviewCompatibleImage imageInfo={{ image }} />}
                </div>
              </div>
              <div className="column is-10 is-offset-1">
                <PageContent className="content mb-2" content={content} />
                {filesList && filesList.length && (
                  <div className="buttons">
                    {filesList
                      .filter(file => file.title != 'hidden')
                      .map(file => {
                        return (
                          <a
                            key={file.title}
                            download
                            className="button is-primary"
                            href={file.file.publicURL}>
                            {file.title}
                          </a>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

ContentPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default ContentPageTemplate;
