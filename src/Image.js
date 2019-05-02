import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    width: '70vw !important',
    margin: '2rem auto !important',
    maxWidth: '900px !important',
  },
  image: {
    width: '100% !important',
    marginBottom: '10px !important',
  },
  caption: {
    fontFamily: 'Open Sans !important',
    fontWeight: '400 !important',
    fontSize: '0.88rem !important',
    color: '#aaa !important',
    margin: '0 !important',
    padding: '0 15px !important',
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

const Image = ({ classes, text }) => {
  text = text.substring(7);
  const splitIdx = text.indexOf(',');
  const url = text.substring(0, splitIdx);
  const caption = text.substring(splitIdx + 2);
  return (
    <div className={classes.container}>
      <img className={classes.image} src={url} alt={caption} />
      {caption && <p className={classes.caption}>{caption}</p>}
    </div>
  );
};

export default injectSheet(styles)(Image);
