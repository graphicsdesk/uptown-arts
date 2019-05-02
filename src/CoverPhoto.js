import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    width: '75vw !important',
    maxWidth: '900px !important',
    margin: '0 auto 1.3rem auto !important',
  },
  image: {
    width: '100% !important',
    marginBottom: '10px !important',
  },
  caption: {
    fontFamily: 'Atlas Grotesk !important',
    fontWeight: 400,
    fontSize: '0.95rem !important',
    color: '#888 !important',
    margin: '0 !important',
  },
  '@media (max-width: 991px)': {
    container: {
      width: '80vw !important',
    },
  },
  '@media (max-width: 680px)': {
    container: {
      width: 'auto !important',
    },
  },
};

const CoverPhoto = ({ classes, source }) => (
  <div className={classes.container}>
    <img className={classes.image} src={source} alt="Cover illustration" />
  </div>
);

export default injectSheet(styles)(CoverPhoto);
