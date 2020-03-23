import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const FeatureGrid = ({ gridItems }) => (
  <div className="values-holder">
    {gridItems.map(item => (
      <div key={item.text} className="columns">
        <div className="column is-6">
          <div className="has-text-centered">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
        <div className="column is-6 text-holder">
          <h2 className="has-text-weight-bold is-size-2 value-title">
            {item.title}
          </h2>
          <p>{item.text}</p>
        </div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
