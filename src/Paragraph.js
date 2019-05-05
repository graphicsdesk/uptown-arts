import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  text: {
    lineHeight: 1.9,
    fontSize: '1.05rem',
    fontFamily: 'Merriweather',
    margin: '0 auto 1.3rem auto',
    maxWidth: '600px',
    padding: '0 15px',
    '& a': {
      textDecoration: 'none',
      color: '#5ec2c2',
      borderBottomColor: '#5ec2c2',
      borderBottomWidth: 0,
    },
    '& a:hover': {
      borderBottomWidth: '1px',
    },
    '& b': {
      display: 'block',
      margin: '0 auto',
      textTransform: 'uppercase',
      fontSize: '1.2rem',
      textAlign: 'center',
    },
  },
};

const Paragraph = ({ classes, text }) => {
  return (
    <p className={classes.text} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default injectSheet(styles)(Paragraph);
