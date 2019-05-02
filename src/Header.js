import React from 'react';
import injectSheet from 'react-jss';
import CoverPhoto from './CoverPhoto';

const styles = {
  header: {
    marginBottom: '1.3rem !important',
  },
  title: {
    margin: '0 auto !important',
    width: '65vw !important',
    maxWidth: '825px !important',
  },
  banner: {
    display: 'inline-block !important',
    textTransform: 'uppercase !important',
    fontFamily: 'Open Sans !important',
    fontSize: '1.05rem !important',
    borderBottom: '2.3px solid #5ec2c2 !important',
    color: '#5ec2c2 !important',
    margin: '0 !important',
    marginBottom: '0.9rem !important',
  },
  headline: {
    fontFamily: 'Merriweather !important',
    fontSize: '2.5rem !important',
    lineHeight: '1.5 !important',
    color: '#333 !important',
    margin: '0 !important',
    marginBottom: '1.7rem !important',
  },
  meta: {
    margin: '0 auto !important',
    maxWidth: '650px !important',
    textAlign: 'center !important',
  },
  byline: {
    fontSize: '1.05rem !important',
    fontFamily: 'Merriweather !important',
    margin: '0 !important',
    marginBottom: '8px !important',
    fontWeight: '900 !important',
    '& a': {
      color: '#000 !important',
    },
  },
  timestamp: {
    fontSize: '1rem !important',
    fontFamily: 'Open Sans !important',
    color: '#333 !important',
    margin: '0 !important',
    textTransform: 'uppercase !important',
  },
  '@media (max-width: 991px)': {
    title: {
      width: '92% !important',
    },
  },
  '@media (max-width: 575px)': {
    headline: {
      fontSize: '2.1rem !important',
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
