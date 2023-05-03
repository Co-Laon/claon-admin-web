import React, { ReactElement } from 'react';
import RootLayout from '../../layouts/RootLayout';

function Main() {
  return <div>main page</div>;
}

Main.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Main;
