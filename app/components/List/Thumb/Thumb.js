require('./style.scss');
import React, { Component } from 'react'
var ReactDOM = require('react-dom');

import { connect } from 'react-redux'
import { openPopup, closePopup } from '../../../actions'


class Thumb extends Component {

  constructor(props) {
    super(props)

    this.path =
      'url(//pics.r18.com/digital/video/' +
      this.props.data.id + '/' +
      this.props.data.id + 'pl.jpg)'
    this.style = { width: this.props.width }
    this.title = this.props.data.title[window.lang]
    this.actress = this.props.data.actress[window.lang].split(',')[0]
  }

  componentDidMount() {
    // get pic element reference
    var pic = this.refs['pic']
    //console.log(pic);

    // resize pic
    const width = pic.offsetWidth;
    const height = width * 1.42;
    pic.style.width = width + 'px';
    pic.style.height = height + 'px';
  }

  render() {
    return (
      <li id='thumb'
        className='swiper-slide'
        style={this.style}
        onClick={e => {
          e.stopPropagation()
          this.props.dispatch(openPopup(this.props.data))
        }}>

        <div id='thumb-image' className='thumb-image'>
          <div
            ref={'pic'}
            className='thumb-pic'
            style={{ backgroundImage: this.path }}
          />
        </div>

        <div className='thumb-play-icon' />

        <div className='thumb-info'>
          <a
            className='thumb-button'
            href='https://www.r18.com/my/cart/sp/checkout/cid=ipz00703/pid=ipz00703dl6/'
            onClick={e => {
              e.stopPropagation()
            }}>
            <span>{window.content.getmovie[window.lang]}</span>
          </a>
          <div className='thumb-title'>{this.title}</div>
          <div className='thumb-name'>{this.actress}</div>
        </div>

      </li>
    )
  }
}

Thumb = connect()(Thumb)

export default Thumb
