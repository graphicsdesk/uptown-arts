import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';

const SCROLLAMA_OFFSET = window.innerWidth > 575 ? 0.5 : 0.8;

const imgStyles = {
  position: 'absolute !important',
  maxWidth: '95% !important',
  maxHeight: '93% !important',
  transitionDuration: '.6s !important',
  boxShadow: '-1px 3px 10px -1px rgba(0,0,0,0.75) !important',
};

const styles = {
  main: {
    padding: '0 15px !important',
    marginBottom: '2rem !important',
    fontFamily: 'Helvetica !important',
    display: 'flex !important',
    justifyContent: 'space-evenly !important',
  },
  graphic: {
    transform: 'translate3d(0, 0, 0) !important',
    flexBasis: '60% !important',
    position: 'sticky !important',
    width: '100% !important',
    height: '100vh !important',
    top: '0 !important',
    alignSelf: 'flex-start !important',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
  },
  img: {
    ...imgStyles,
    visibility: 'visible !important',
    opacity: '1 !important',
  },
  hideImg: {
    ...imgStyles,
    visibility: 'hidden !important',
    opacity: '0 !important',
  },
  scroller: {
    flexBasis: '35% !important',
    padding: '70vh 0 20vh 0 !important',
  },
  step: {
    margin: '0 auto !important',
    maxWidth: '500px !important',
    padding: '10px !important',
    marginBottom: '80vh !important',
  },
  artistName: {
    fontFamily: 'Merriweather !important',
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    margin: '0 !important',
  },
  text: {
    fontFamily: 'Merriweather !important',
    fontSize: '1.05rem !important',
    margin: '1.2rem 0 1rem 0 !important',
    lineHeight: '1.7 !important',
  },
  credit: {
    color: '#aaa !important',
    fontSize: '0.8rem !important',
    margin: '0 2rem 1rem 0 !important',
    borderTop: '0.8px solid #ddd !important',
    paddingTop: '0.8rem !important',
    fontWeight: '20px !important',
    fontFamily: 'Open Sans !important',
  },

  '@media (max-width: 575px)': {
    main: {
      flexDirection: 'column !important',
    },
    scroller: {
      paddingTop: '0 !important',
      zIndex: '1 !important',
    },
    step: {
      backgroundColor: 'rgba(255, 255, 255, 0.9) !important',
    },
    credit: {
      color: 'black !important',
      borderTop: '0.8px solid #ddd !important',
      borderColor: 'black !important',
      fontSize: '0.6rem !important',
    },
    text: {
      justifyContent: 'center !important',
      textAlign: 'center !important',
      fontSize: '1rem !important',
    },
    artistName: {
      textAlign: 'center !important',
      paddingTop: '1rem !important',
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
      forceImg: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ forceImg: false }), 10);
  }

  onStepEnter = ({ data }) => {
    this.setState({ data });
  };

  render() {
    const { data, forceImg } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.graphic} id="dangerous-sticky-enforcer">
          {this.images.map(({ src, alt }) => (
            <img
              key={src}
              className={
                forceImg || data === src ? classes.img : classes.hideImg
              }
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
