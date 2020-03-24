import React from 'react';
import PropTypes from 'prop-types';
import { OurValuesTemplate } from '../../templates/our-values-page';

const OurValuesPreview = ({ entry }) => (
  <OurValuesTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    description={entry.getIn(['data', 'description'])}
    ourValues={entry.getIn(['data', 'ourValues'])}
  />
);

OurValuesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default OurValuesPreview;
