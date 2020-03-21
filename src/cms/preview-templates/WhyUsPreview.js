import React from 'react';
import PropTypes from 'prop-types';
import { WhyUsTemplate } from '../../templates/why-us-page';

const WhyUsPreview = ({ entry, widgetFor }) => (
  <WhyUsTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

WhyUsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default WhyUsPreview;
