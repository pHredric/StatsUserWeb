import React, { Component } from 'react';
import Tabs from './Tabs/Tabs';
import "./StatsArea.css";
import StatsWindow from "./Stats/StatsWindow";
import CellInfo from './Stats/CellInfo';
import { TabsInfo } from './Tabs/TabInfo';
import * as data from '../../Data/data';

interface IStatsAreaProps {
    currentUser: string
}

interface IStatsAreaState {
    allTabs: TabsInfo,
    selectedTab: string,
    rows: CellInfo[][],
    currentUser: string
}

class StatsArea extends Component<IStatsAreaProps,IStatsAreaState>  {
    constructor(props: IStatsAreaProps) {
        super(props);
        this.state = { allTabs : getTabs(), selectedTab : '', rows: [] as CellInfo[][], currentUser: props.currentUser }
    }

    OnTabClicked = (name: string) => {
        console.log(`StatsArea: Vi klickade på flik ${name}`);
        const statRows = this.getStatRows(name);
        this.setState({ selectedTab: name });
        this.setState({ rows: statRows});
    }
    getStatRows = (tabName: string): CellInfo[][] => {
        const rows = data.getRows(tabName, this.state.currentUser);
        return rows;
    }

    render() {
        return (
            <div id="Stats">
                {this.state.currentUser}
                <Tabs allTabsInfo={this.state.allTabs} clickedTab={this.OnTabClicked}/>
                { this.state.rows.length > 0 ? <StatsWindow rows={this.state.rows} title={this.state.selectedTab}/> : null } { /* TODO: Fixa en tom klass hit som tar lite utrymme} */}               
            </div> 
        )
    }
}

export default StatsArea;

function getTabs() : TabsInfo {
    return data.getAllTabs();
}
