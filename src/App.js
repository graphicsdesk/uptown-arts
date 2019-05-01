import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import copyString from './copy';
import archieml from 'archieml';
import { relative } from 'path';

/*
possible window dimensions: 
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
*/

const { copy } = archieml.load(copyString);

const styles = {
  main: {
    padding: '100vh 2vw',
    fontFamily: 'Helvetica',
    display: 'flex',
    justifyContent: 'space-evenly',
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
   // opacity: 1,
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
    margin: '0 auto auto auto',
    paddingTop: '350px',
    paddingBottom: '270px',
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
    margin: '0 1rem 1rem 0',
    lineHeight: '1.7',
  },
  credit: {
    color: '#aaa',
    fontSize: '0.85rem',
    margin: '0 2rem 1rem 0',
    borderTop: '0.8px solid #ddd',
    paddingTop: '0.8rem',
    fontWeight: '20px',
    fontFamily: 'Open Sans',
  },
  '@media (max-width: 576px)': {
    main: {
      flexDirection: 'column', 
      //update margins
      margin: '1rem, 0, 1rem, 0'
      // change flex direction
    },
    scroller: {
      zIndex: '1', 
      flexBasis: '75%'
    },
    step: {
      backgroundClip: 'content-box',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
       
      //adjust margins
      // give it a white background, a little transparent (rgba)
    },
    credit: 
    {
      color: 'black', 
      borderTop: '0.8px solid #ddd',
      borderColor: 'black',
      fontSize: '0.6rem'
    },
    text: 
    { 
      justifyContent: 'center', 
      textAlign: 'center', 
      fontSize: '0.9rem'
    }, 
    artistName: 
    {
      textAlign: 'center', 
    },
    // maybe also center the text
  }
};

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