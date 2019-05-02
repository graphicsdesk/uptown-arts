import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  text: {
    lineHeight: '1.9 !important',
    fontSize: '1.05rem !important',
    fontFamily: 'Merriweather !important',
    margin: '0 auto 1.3rem auto !important',
    maxWidth: '600px !important',
    padding: '0 15px !important',
    '& a': {
      textDecoration: 'none !important',
      color: '#5ec2c2 !important',
      borderBottom: 'none !important',
    },
    '& a:hover': {
      borderBottom: '1px solid #5ec2c2 !important',
    },
    '& b': {
      display: 'block !important',
      margin: '0 auto !important',
      textTransform: 'uppercase !important',
      fontSize: '1.2rem !important',
      textAlign: 'center !important',
    },
  },
};

const Paragraph = ({ classes, text }) => {
  return (
    <p className={classes.text} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default injectSheet(styles)(Paragraph);
