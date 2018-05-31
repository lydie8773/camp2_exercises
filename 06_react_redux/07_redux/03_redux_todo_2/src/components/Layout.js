import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';

const Layout = (props) => (
  <div id="page-root">
    <Navigation />
    <main className="main container">
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;
