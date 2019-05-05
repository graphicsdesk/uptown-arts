import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Break: {
    margin: '3rem auto',
    borderTop: '1px solid #ddd',
    maxWidth: '600px',
    padding: '0 15px',
  },
};

const Break = ({ classes, text }) => {
  return <div className={classes.Break} />;
};

export default injectSheet(styles)(Break);
