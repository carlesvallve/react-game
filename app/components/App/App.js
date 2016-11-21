require('./fonts.scss');
require('./style.scss');

import React from 'react'
import { SetLanguage, SetPlatform } from '../../utils/utils'

import Grid from '../Grid/Grid'

import { connect } from 'react-redux'
//import { refreshList } from '../actions'


let App = ({ dispatch }) => {

  console.log('Initializing App:')
  SetLanguage();
  SetPlatform();

  return (
    <div className='app'>
      <div className='header'>HEADER</div>
      <Grid width={7} height={7} />
      <div className='footer'>FOOTER</div>
    </div>
  )
}

export default connect()(App)
