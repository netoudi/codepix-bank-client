import * as React from 'react';

import Footer from 'components/Footer';
import MainContent from 'components/MainContent';
import Navbar from 'components/Navbar';

import classes from './Layout.module.scss';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <MainContent>{props.children}</MainContent>
      <Footer />
    </div>
  );
};

export default Layout;
