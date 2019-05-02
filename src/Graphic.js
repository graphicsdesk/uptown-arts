import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';

const SCROLLAMA_OFFSET = window.innerWidth > 575 ? 0.5 : 0.8;

const styles = {
  main: {
    padding: '0 15px',
    marginBottom: '2rem',
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
    opacity: 1,
    transitionDuration: '.4s',
    boxShadow: '-1px 3px 10px -1px rgba(0,0,0,0.75)',
  },
  hideImg: {
    position: 'absolute',
    maxWidth: '95%',
    maxHeight: '93%',
    visibility: 'hidden',
    opacity: 0,
    transitionDuration: '.4s',
    boxShadow: '-1px 3px 10px -1px rgba(0,0,0,0.75)',
  },
  scroller: {
    flexBasis: '35%',
    padding: '70vh 0 20vh 0',
  },
  step: {
    margin: '0 auto',
    maxWidth: '500px',
    padding: '10px',
    marginBottom: '80vh',
  },
  artistName: {
    fontFamily: 'Merriweather',
    fontSize: '1.1rem',
    fontWeight: 700,
    margin: '0',
  },
  text: {
    fontFamily: 'Merriweather',
    fontSize: '1.05rem',
    margin: '1.2rem 0 1rem 0',
    lineHeight: '1.7',
  },
  credit: {
    color: '#aaa',
    fontSize: '0.8rem',
    margin: '0 2rem 1rem 0',
    borderTop: '0.8px solid #ddd',
    paddingTop: '0.8rem',
    fontWeight: '20px',
    fontFamily: 'Open Sans',
  },

  '@media (max-width: 575px)': {
    main: {
      flexDirection: 'column',
    },
    scroller: {
      paddingTop: 0,
      zIndex: '1',
    },
    step: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    credit: {
      color: 'black',
      borderTop: '0.8px solid #ddd',
      borderColor: 'black',
      fontSize: '0.6rem',
    },
    text: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '1rem',
    },
    artistName: {
      textAlign: 'center',
      paddingTop: '1rem',
    },
  },
};

class Graphic extends Component {
  constructor(props) {
    super(props);
    const { classes, artists } = props;

    this.images = [];

    this.steps = artists.reduce((acc, artistObj) => {
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
                {artworkIdx === 0 &&
                stepIdx === 0 && <p className={classes.artistName}>{artist}</p>}
                <p className={classes.text}>{step}</p>
                {stepIdx === 0 && <p className={classes.credit}>{credit}</p>}
              </div>
            </Step>,
          );
        });
      });
      return acc;
    }, []);

    this.state = {
      data: this.images[0].src,
    };
  }

  onStepEnter = ({ data }) => {
    this.setState({ data });
  };

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
            offset={SCROLLAMA_OFFSET}
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

export default injectSheet(styles)(Graphic);
