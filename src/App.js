import React from 'react';
import injectSheet from 'react-jss';
import archieml from 'archieml';
import copyString from './copy';

import Graphic from './Graphic';
import Paragraph from './Paragraph';
import Image from './Image';
import Break from './Break';
import Header from './Header';

const { header, contentBefore, artists, contentAfter } = archieml.load(
  copyString,
);

const styles = {
  App: {
    margin: '5vh 0',
  },
};

const App = ({ classes }) => {
  return (
    <div className={classes.App}>
      <Header header={header} />
      {contentBefore.map(
        text =>
          text.startsWith('IMAGE:') ? (
            <Image key={text} text={text} />
          ) : (
            <Paragraph key={text} text={text} />
          ),
      )}
      <Graphic artists={artists} />
      {contentAfter.map(
        text =>
          text.startsWith('IMAGE:') ? (
            <Image key={text} text={text} />
          ) : text === 'BREAK' ? (
            <Break key={text} />
          ) : (
            <Paragraph key={text} text={text} />
          ),
      )}
    </div>
  );
};

export default injectSheet(styles)(App);
