require('./style.scss');

import React from 'react'
import { SetLanguage, SetPlatform } from '../utils/utils'

import Grid from './Grid/Grid'

//import { connect } from 'react-redux'
//import { refreshList } from '../actions'


let App = ({ dispatch }) => {

  SetLanguage();
  SetPlatform();

  return (
    <div className='app'>
      <div className='header'>Hello World</div>
      <Grid />
      <div className='footer'>Bye World</div>
    </div>
  )
}

//App = connect()(App)

export default App
