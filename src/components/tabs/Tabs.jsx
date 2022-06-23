import React, { Component } from 'react'
import TabNav from './TabNav'
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './Tabs.scss'
const TabNavItem = (props) => {
    const classList = classNames('tab-item-container', {
        "tab-item-seleted": props.isSelected,
        "tab-item-unselected": !props.isSelected
    })

    const { beginTime, des } = props.itemData || {}

    return (<div className={classList}>
        <span className='time'>
            {beginTime}
        </span>
        <span className='des'>
            {des}
        </span>
    </div>)
}

class Tabs extends Component {

    constructor(props) {
        super(props)
        this.mapStatus2Des = {
            0: "已经结束",
            1: "抢购中",
            2: "即将开始"
        }
    }

    onTabChange(activeIndex) {
        if (activeIndex !== this.props.activeIndex) {
            if (typeof this.props.onTabChange === 'function') {
                this.props.onTabChange(activeIndex)
            }
        }
    }

    render() {
        console.log('props',this.props)
        const { tabs = [] } = this.props
        const showTabs = tabs.map((item) => {
            return {
                beginTime: item.beginTime,
                des: this.mapStatus2Des[item.status]
            }
        })
        console.log("showTabs",showTabs)
        return <TabNav
            className='tabs-container'
            tabsItem={showTabs}
            onTabChange={this.onTabChange.bind(this)}
            activeIndex={this.props.activeIndex}
            renderChild={
                (itemData, index) => {
                    return (<TabNavItem
                        itemData={itemData}
                        isSelected={index === this.props.activeIndex} />)
                }
            }
        >
        </TabNav>
    }
}

export default Tabs