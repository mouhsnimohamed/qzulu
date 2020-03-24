import React from 'react';

import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const Members = ({ members }) => (
  <div className="team-members columns">
    {members.map(member => (
      <div className="member column" key={member.name}>
        <div className="has-text-centered">
          <PreviewCompatibleImage imageInfo={member} />
        </div>
        <div className="text">
          <h4>{member.name}</h4>
          <h5>{member.function}</h5>
          <p>{member.bio}</p>
        </div>
      </div>
    ))}
  </div>
);

Members.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default Members;
