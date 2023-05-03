import React, { ReactElement } from 'react';
import RootLayout from './layout';

function Main() {
  return <div>main page</div>;
}

Main.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Main;
