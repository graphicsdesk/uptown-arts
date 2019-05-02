import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Break: {
    margin: '3rem auto !important',
    borderTop: '1px solid #ddd !important',
    maxWidth: '600px !important',
    padding: '0 15px !important',
  },
};

const Break = ({ classes, text }) => {
  return <div className={classes.Break} />;
};

export default injectSheet(styles)(Break);
