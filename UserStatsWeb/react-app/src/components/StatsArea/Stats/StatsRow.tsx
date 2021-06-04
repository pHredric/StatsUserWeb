import React from 'react';
import StatsCell from './StatsCell';
import CellInfo from './CellInfo';
import './StatsRow.css';

type StatsRowProps = {
    cells: CellInfo[]
}

const StatsRow = ({ cells } : StatsRowProps) => (
        <div className="StatsRow">
            {cells.map((c, index) => <StatsCell cellInfo={c} key={index}/>)}            
        </div>
)

export default StatsRow;
