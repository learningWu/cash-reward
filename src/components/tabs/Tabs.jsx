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
        this.state = {
            activeIndex: props.activeIndex || 0
        }
        const mapStatus2Des = {
            0: "已经结束",
            1: "抢购中",
            2: "即将开始"
        }
        this.tabsItem = [{
            beginTime: "06:00",
            des: mapStatus2Des[0]
        }, {
            beginTime: "08:00",
            des: mapStatus2Des[1]
        }, {
            beginTime: "16:00",
            des: mapStatus2Des[2]
        }]
    }

    onTabChange(activeIndex) {
        if (activeIndex !== this.state.activeIndex) {
            this.setState({
                activeIndex
            })
            if (typeof this.props.onTabChange === 'function') {
                this.props.onTabChange(activeIndex)
            }
        }
    }

    render() {
        return <TabNav
            className='tabs-container'
            tabsItem={this.tabsItem}
            onTabChange={this.onTabChange.bind(this)}
            {...this.state}
            renderChild={
                (itemData, index) => {
                    return (<TabNavItem
                        itemData={itemData}
                        isSelected={index === this.state.activeIndex} />)
                }
            }
        >
        </TabNav>
    }
}

export default Tabs