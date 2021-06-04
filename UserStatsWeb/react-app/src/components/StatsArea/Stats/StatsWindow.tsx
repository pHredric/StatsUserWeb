import React from 'react';
import StatsRow from './StatsRow';
import CellInfo from './CellInfo';
import './StatsWindow.css';

type StatsWindowProps = {
    rows: CellInfo[][],
    title: string
}

const StatsWindow = ({rows, title} : StatsWindowProps) => (
        <div id="StatsWindow">
            <h2>{title}</h2>
            {rows.map((r, index) => <StatsRow cells={r} key={index} />)} 
        </div>
);

export default StatsWindow;

