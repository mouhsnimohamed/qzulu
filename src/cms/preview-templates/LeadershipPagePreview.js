import React from 'react';
import PropTypes from 'prop-types';
import { LeadershipPageTemplate } from '../../templates/leadership-page';

const LeadershipPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data);
  return (
    <LeadershipPageTemplate
      banner={data.banner}
      members={data.members || []}
      content={widgetFor('body')}
    />
  );
};

LeadershipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default LeadershipPagePreview;
