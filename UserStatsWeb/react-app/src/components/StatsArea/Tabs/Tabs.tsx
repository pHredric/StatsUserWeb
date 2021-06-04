import React, { Component } from 'react';
import Tab from './Tab';
import { TabsInfo } from './TabInfo';
import './Tabs.css';

interface ITabsProps {
    allTabsInfo: TabsInfo,
    clickedTab: (name: string) => void;
}

interface ITabsState {
    allTabs: TabsInfo
}

class Tabs extends Component<ITabsProps, ITabsState> {
    constructor(props: ITabsProps) {
        super(props);
        this.state = { allTabs: this.props.allTabsInfo} ;
    }

    GetTabName = (name: string) => {
        console.log(`Klickade ${name}`);
        const mytabs = this.state.allTabs;
        console.log(mytabs);
        mytabs.tabs.forEach(t => {
            if(t.title === name) {
                t.isActive = true;
            }
            else {
                t.isActive = false;
            }
        });
        this.props.clickedTab(name);
        this.setState({allTabs: mytabs});
    };
    render() {
        return(
        <div id="Tabs">
            {this.state.allTabs.tabs.map(t => <Tab isActive={t.isActive} title={t.title} clickedTab={this.GetTabName} key={t.id}/>)}
        </div>);
    };
}

export default Tabs;
