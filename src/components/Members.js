import React from 'react';

import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Paragraph from './Paragraph';

const Members = ({ members }) => {
  return (
    <div className="team-members columns is-multiline">
      {members.map(member => (
        <div className="member column is-one-quarter" key={member.name}>
          <div className="has-text-centered">
            <PreviewCompatibleImage imageInfo={member} />
          </div>
          <div className="text">
            <h4>{member.name}</h4>
            <h5>{member.function}</h5>
            <Paragraph p={member.bio} />
          </div>
        </div>
      ))}
    </div>
  );
};

Members.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default Members;
