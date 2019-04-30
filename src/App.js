import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import copyString from './copy';
import archieml from 'archieml';

const { copy } = archieml.load(copyString);

const blue = require('./images/blue.jpg')
const red = require('./images/red.jpg')
const man = require('./images/man.jpg')
const abstract = require('./images/abstract.jpg')

const styles = {
  main: {
    padding: '100vh 2vw',
    display: 'flex',
    fontFamily: 'Helvetica',
    justifyContent: 'space-between',
  },
  graphic: {
    flexBasis: '60%',
    position: 'sticky',
    width: '100%',
    height: '100vh',
    top: 0,
    alignSelf: 'flex-start',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    position: 'absolute',
    maxWidth: '95%',
    maxHeight: '93%',
    visibility: 'visible',
    opacity: 1,
    transitionDuration: '.3s',
    boxShadow: '-1px 3px 10px -1px rgba(0,0,0,0.75)',
  },
  hideImg: {
    position: 'absolute',
    maxWidth: '95%',
    maxHeight: '93%',
    visibility: 'hidden',
    opacity: 0,
    transitionDuration: '.3s',
    boxShadow: '-1px 3px 10px -1px rgba(0,0,0,0.75)',
  },
  scroller: {
    flexBasis: '35%',
  },
  step: {
    margin: '0 auto 2rem auto',
    paddingTop: '200px',
    paddingBottom: '200px',
  },
  artistName: {
    fontFamily: 'Merriweather',
    fontSize: '1.2rem',
    fontWeight: 700,
    margin: '0 0 1rem 0',
  },
  text: {
    fontFamily: 'Merriweather',
    fontSize: '1.2rem',
    margin: '0 0 1rem 0',
    lineHeight: '1.7',
  },
  credit: {
    color: '#aaa',
    fontSize: '1rem',
    borderTop: '0.8px solid #ddd',
    paddingTop: '0.8rem',
    fontFamily: 'Open Sans',
  },
};

//  <img src = { blue } />
class App extends Component {
  constructor(props) {
    super(props);
    const { classes } = props;

    this.images = [];

    this.steps = copy.reduce((acc, artistObj) => {
      const { artist, artworks } = artistObj;
      artworks.forEach((artwork, artworkIdx) => {
        const { credit, image, steps } = artwork;
        this.images.push({
          src: image,
          alt: credit,
        });

        steps.forEach((step, stepIdx) => {
          acc.push(
            <Step data={image} key={step}>
              <div className={classes.step}>
                {artworkIdx === 0 && stepIdx === 0 && (
                  <p className={classes.artistName}>{artist}</p>
                )}
                <p className={classes.text}>{step}</p>
                {stepIdx === 0 && (
                  <p className={classes.credit}>{credit}</p>
                )}
              </div>
            </Step>
          );
        });
      });
      return acc;
    }, []);

    this.state = {
      data: null,
    };
  }

  onStepEnter = ({ data }) => {
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.graphic}>
          {this.images.map(({ src, alt }) => (
            <img
              key={src}
              className={data === src ? classes.img : classes.hideImg}
              src={src}
              alt={alt}
            />
          ))}
        </div>
        <div className={classes.scroller}>
          <Scrollama
            offset={0.33}
            onStepEnter={this.onStepEnter}
            onStepExit={this.onStepExit}
          >
            {this.steps}
          </Scrollama>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(App);