import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';

const blue = require('./images/blue.jpg')
const red = require('./images/red.jpg')
const man = require('./images/man.jpg')
const abstract = require('./images/abstract.jpg')

const styles = {
  main: {
    backgroundColor: 'black',
    padding: '100vh 2vw',
    display: 'flex',
    fontFamily: 'Helvetica',
    justifyContent: 'space-between',
    color: '#fff',
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
    '& p': {
      fontSize: '5rem',
      textAlign: 'center',
      color: '#fff',
    },
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  scroller: {
    flexBasis: '35%',
  },
  step: {
    margin: '0 auto 80vh auto',
    padding: '1px',
    '& p': {
      textAlign: 'center',
      padding: '1rem',
      fontSize: '1.5rem',
    },
  },
};

//  <img src = { blue } />
class App extends Component {

  state = {
    data: null,
    steps: [blue, red, man, abstract],
  }

  onStepEnter = ({ data }) => {
    console.log('enter');
    this.setState({ data });
  }

  onStepExit = ({ data }) => {
    console.log('exit')
  }

  render() {
    const { data, steps } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.graphic}>
          <img className={classes.img} src={data} />
        </div>
        <div className={classes.scroller}>
          <Scrollama
            offset={0.33}
            onStepEnter={this.onStepEnter}
            onStepExit={this.onStepExit}
            debug
          >
            {steps.map((value, index) => (
              <Step data={value} key={value + '-' + index}>
                <div className={classes.step}>
                  <p>step value: {value}</p>
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(App);