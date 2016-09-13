require('./fonts.scss');
require('./style.scss');

import React from 'react'
import { SetLanguage, SetPlatform } from '../../utils/utils'

import Grid from '../Grid/Grid'

//import { connect } from 'react-redux'
//import { refreshList } from '../actions'


let App = ({ dispatch }) => {

  SetLanguage();
  SetPlatform();

  return (
    <div className='app'>
      <div className='header'>Header</div>
      <Grid width={7} height={7} />
      <div className='footer'>Footer</div>
    </div>
  )
}

//App = connect()(App)

export default App
