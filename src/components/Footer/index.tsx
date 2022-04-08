import * as React from 'react';

import Image from 'next/image';

import logoPix from '../../../public/img/logo_pix.png';
import classes from './Footer.module.scss';

const Footer: React.FunctionComponent = () => {
  return (
    <div className={classes.root}>
      <Image src={logoPix} alt="Logo Code Pix" />
    </div>
  );
};

export default Footer;
