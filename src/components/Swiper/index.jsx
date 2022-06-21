import React, { Component } from 'react'
import { sleep } from '../../common/util/base.js'

// import 'swiper/swiper-bundle.js'

import Swiper from './swiper3/swiper.min.js'
import './swiper3/swiper.css'


export default class extends Component {
  constructor(props) {
    super(props)
    this._swiper = null
  }
  shouldComponentUpdate() {
    this.props.callUpdate && this.props.callUpdate(this._swiper)
    return false
  }
  callTap() {
    const { tap } = this.props
    const { _swiper } = this
    try {
      tap && tap(_swiper.realIndex, _swiper.clickedIndex)
    } catch (e) { }
  }
  componentDidMount() {
    const { beforeReady, items, parentClassName, transitionClass, touchMove, changeing, changed, swiperConfigs, setStyle, control, tap } = this.props
    beforeReady && beforeReady()

    if (items.length < 2) {
      delete swiperConfigs.loop
      swiperConfigs.noSwiping = true
      swiperConfigs.allowSlideNext = false
      swiperConfigs.allowSlidePrev = false
    }

    let _swiper = this._swiper = new Swiper('.swiper-container.' + parentClassName, Object.assign({
      onProgress: _ => {
        if (!_swiper) return;
        if (!setStyle) return;
        const cur = _swiper.realIndex
        changeing && changeing(cur)
        for (let i = 0, n = _swiper.slides.length; i < n; i++) {
          setStyle(_swiper.slides.eq(i), _swiper.slides[i].progress, cur)
        }
      },
      /*
      onSetTransition: (swiper, transition)=>{
        if(!_swiper) return;
        if(!setStyle) return;
        const slides=_swiper.slides
        this.jj=this.jj || (transitionClass? slides.find(transitionClass.join(',')): slides)
        this.jj.transition(transition)
      },
      */
      onTap: (swiper, e) => {
        if (e.type !== 'touchend') return;
        tap && tap(_swiper.realIndex, _swiper.clickedIndex)
      },
      onSlideChangeEnd: _ => {
        if (!_swiper) return;
        const cur = _swiper.realIndex
        changeing && changeing(cur)
        changed && changed(cur)
        try {
          _swiper.fixLoop()
        } catch (e) { }
      },
      onSliderMove: _ => {
        if (!_swiper) return;
        touchMove && touchMove(_swiper)
      },
    }, swiperConfigs))

    window[parentClassName] = _swiper

      ; (async _=> {
      if(!control) return;
        for(;;) {
        const c = await control()
        await sleep(10)
        if (!c) continue
        _swiper.params.control = c

        break
      }
  })()

_swiper.update()

  }
componentWillUnmount() {
  if (!this._swiper) return;
  this._swiper.destroy()
  this._swiper = null
}
render() {
  const { style, items, parentClassName, disabled, tap } = this.props
  let disabled2 = disabled || items.length < 2
  return <div className={"swiper-container " + parentClassName + " " + (disabled2 ? 'swiper-no-swiping' : '')} style={style || {}} onClick={_ => {
    if (!disabled2) return;
    tap && tap(0, 0)
  }}>
    <div className="swiper-wrapper">
      {items.map((item, i) => <div className="swiper-slide" key={i}>{item}</div>)}
    </div>
  </div>
}
}
