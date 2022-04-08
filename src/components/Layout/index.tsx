import * as React from 'react';

import classes from './Layout.module.scss';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  return <div className={classes.root}>{props.children}</div>;
};

export default Layout;
