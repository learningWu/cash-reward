import React, { Component } from 'react'
import './TabContent.scss'
class TabContent extends Component {

    getTabContents() {
        const { tabsItem = [], activeIndex = 0 } = this.props
        return React.Children.map(tabsItem, (child, index) => {
            return index === activeIndex ? <div className='tab-content-container'>
                {child}
            </div > : null

        }
        )
    }

    render() {
        return <div className='tab-content' ref="tabContent">
            {this.getTabContents()}
        </div>
    }
}

export default TabContent