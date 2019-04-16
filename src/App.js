import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';

const styles = {
  main: {
    padding: '70vh 2vw',
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
    backgroundColor: '#aaa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
      fontSize: '5rem',
      textAlign: 'center',
      color: '#fff',
    },
  },
  scroller: {
    flexBasis: '35%',
  },
  step: {
    margin: '0 auto 2rem auto',
    paddingTop: 200,
    paddingBottom: 200,
    border: '1px solid #333',
    '& p': {
      textAlign: 'center',
      padding: '1rem',
      fontSize: '1.5rem',
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
};

class App extends Component {
  state = {
    data: 0,
    steps: [1, 2, 3],
  }

  onStepEnter = ({ data }) => this.setState({ data });

  render() {
    const { data, steps } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.graphic}>
          <p>{data}</p>
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