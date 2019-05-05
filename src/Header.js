import React from 'react';
import injectSheet from 'react-jss';
import CoverPhoto from './CoverPhoto';

const styles = {
  header: {
    marginBottom: '1.3rem',
  },
  title: {
    margin: '0 auto',
    width: '65vw',
    maxWidth: '825px',
  },
  banner: {
    display: 'inline-block',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontSize: '1.05rem',
    borderBottom: '2.3px solid #5ec2c2',
    color: '#5ec2c2',
    margin: 0,
    marginBottom: '0.9rem',
  },
  headline: {
    fontFamily: 'Merriweather',
    fontSize: '2.5rem',
    lineHeight: 1.5,
    color: '#333',
    margin: 0,
    marginBottom: '1.7rem',
  },
  meta: {
    margin: '0 auto',
    maxWidth: '650px',
    textAlign: 'center',
  },
  byline: {
    fontSize: '1.05rem',
    fontFamily: 'Merriweather',
    margin: 0,
    marginBottom: '8px',
    fontWeight: 900,
    '& a': {
      color: '#000',
    },
  },
  timestamp: {
    fontSize: '1rem',
    fontFamily: 'Open Sans',
    color: '#333',
    margin: 0,
    textTransform: 'uppercase',
  },
  '@media (max-width: 991px)': {
    title: {
      width: '92%',
    },
  },
  '@media (max-width: 575px)': {
    headline: {
      fontSize: '2.1rem',
    },
  },
};

const Header = ({ classes, header }) => {
  const { headline, bylines, date, image } = header;
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <p className={classes.banner}>The Eye | Features</p>
        <p className={classes.headline}>{headline}</p>
      </div>
      <CoverPhoto source={image} />
      <div className={classes.meta}>
        {bylines.map(line => (
          <p
            key={line.substr(0, 100)}
            className={classes.byline}
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
        <p className={classes.timestamp}>{date}</p>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Header);
