import React, { Component } from 'react'
import './TabNav.scss'
import ReactDOM from 'react-dom';
import classNames from 'classnames';
class TabNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabsItem: [...(props.tabsItem || [])]
        }
    }

    onclickHandle(index) {
        const { activeIndex, onTabChange } = this.props
        if (activeIndex !== index && typeof onTabChange === 'function') {
            onTabChange(index)
        }
    }

    getTabs() {
        const { activeIndex = 0 } = this.props
        console.log("getTabs", this.state.tabsItem)
        return this.state.tabsItem.map((item, index) => {
            return (
                <div onClick={this.onclickHandle.bind(this, index)}>
                    {this.props.renderChild(item, index)}
                </div>
            )
        })
    }

    render() {
        return <div className={`tab-nav ${this.props.className}`} ref={this.props.forwardRef} >
            {this.getTabs()}
        </div>
    }
}

export default TabNav