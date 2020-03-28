import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const BusinessFeatures = ({ blocks }) => (
  <div className="columns is-multiline">
    {blocks.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block'
              }}>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <h2 className="is-size-2">{item.title}</h2>
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
