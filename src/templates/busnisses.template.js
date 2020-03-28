import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import BusinessFeatures from '../components/BusnissesFeatures';

export const BusnissesTemplate = ({ title, intro, blocks }) => {
  return (
    <Layout>
      <div className="content">
        <div className="full-width-image-container margin-top-0 with-gradient-bg">
          <div className="gradient-static-bg"></div>
          {title && (
            <h4 className="gradient-title is-size-2 has-text-weight-normal">
              {title}
            </h4>
          )}
        </div>
        <div className="columns is-multiline">
          <div className="column is-10 is-offset-1">
            <p className="costum-p">{intro}</p>
          </div>
        </div>
        <section className="section section--gradient">
          <div className="container content">
            <div className="columns is-multiline">
              <div className="column is-10 is-offset-1">
                <BusinessFeatures blocks={blocks} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

BusnissesTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  blocks: PropTypes.array
};

export default BusnissesTemplate;
