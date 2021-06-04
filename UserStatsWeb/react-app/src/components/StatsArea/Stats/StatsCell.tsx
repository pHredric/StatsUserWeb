import React from 'react';
import './StatsCell.css';
import CellInfo, {CellType} from './CellInfo';

type CellProps = {
    cellInfo : CellInfo
}

const StatsCell = ({cellInfo} : CellProps) => (
        <div 
            className={`StatsCell 
                ${cellInfo.cellType === CellType.RowHeader ? "rowHeader" : ""}
                ${cellInfo.cellType === CellType.Ref ? "ref" : ""}
                `} 
            style={{'width': `${cellInfo.width}px`}}
            >{cellInfo.value}</div>
);

export default StatsCell;