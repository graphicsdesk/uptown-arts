import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    width: '70vw',
    margin: '2rem auto',
    maxWidth: '900px',
  },
  image: {
    width: '100%',
    marginBottom: '10px',
  },
  caption: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '0.88rem',
    color: '#aaa',
    margin: 0,
    padding: '0 15px',
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
