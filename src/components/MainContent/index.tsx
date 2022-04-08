import * as React from 'react';

import classes from './MainContent.module.scss';

export type MainContentProps = {
  children: React.ReactNode;
};

const MainContent: React.FunctionComponent<MainContentProps> = (props) => {
  return (
    <main className={classes.root}>
      <div className="container">{props.children}</div>
    </main>
  );
};

export default MainContent;
