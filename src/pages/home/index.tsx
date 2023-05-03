import React, { ReactElement } from 'react';
import RootLayout from './layout';

const Main = () => <div></div>;

Main.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Main;
