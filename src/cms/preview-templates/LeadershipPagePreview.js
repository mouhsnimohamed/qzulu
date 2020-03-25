import React from 'react';
import PropTypes from 'prop-types';
import { LeadershipPageTemplate } from '../../templates/leadership-page';

const LeadershipPagePreview = ({ entry, widgetFor }) => (
  <LeadershipPageTemplate
    banner={entry.getIn(['data', 'banner'])}
    members={entry.getIn(['data', 'members'])}
    content={widgetFor('body')}
  />
);

LeadershipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default LeadershipPagePreview;
