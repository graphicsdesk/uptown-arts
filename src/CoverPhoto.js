import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    width: '75vw',
    maxWidth: '900px',
    margin: '0 auto 1.3rem auto',
  },
  image: {
    width: '100%',
    marginBottom: '10px',
  },
  caption: {
    fontFamily: 'Atlas Grotesk',
    fontWeight: 400,
    fontSize: '0.95rem',
    color: '#888',
    margin: 0,
  },
  '@media (max-width: 991px)': {
    container: {
      width: '80vw',
    },
  },
  '@media (max-width: 680px)': {
    container: {
      width: 'auto',
    },
  },
};

const CoverPhoto = ({ classes, source }) => (
  <div className={classes.container}>
    <img className={classes.image} src={source} alt="Cover illustration" />
  </div>
);

export default injectSheet(styles)(CoverPhoto);
