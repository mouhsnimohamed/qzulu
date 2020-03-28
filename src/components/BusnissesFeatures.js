import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const BusinessFeatures = ({ blocks }) => (
  <div className="columns is-multiline">
    {blocks.map(item => (
      <div key={item.title} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div className="buseness-image">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <h2 className="is-size-3">{item.title}</h2>
          <p>{item.description}</p>
        </section>
      </div>
    ))}
  </div>
);

BusinessFeatures.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default BusinessFeatures;
