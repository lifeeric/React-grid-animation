import React, { Component } from 'react';

// this file is uploading Material-icons
import '../node_modules/material-icons/iconfont/material-icons.scss'; 

import Gallery from './components/Gallery/Gallery';

class App extends Component {

  render () {

    return (
      <React.Fragment>
        <Gallery />
      </React.Fragment>
    );
  }
}

export default App;
