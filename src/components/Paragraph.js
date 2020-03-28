import React, { Fragment } from 'react';

const Paragraph = ({ p }) => {
  if (p) {
    return (
      <p>
        {p.split('\n').map((item, key) => {
          return (
            <Fragment key={key}>
              {item}
              <br />
            </Fragment>
          );
        })}
      </p>
    );
  }
  return null;
};

export default Paragraph;
