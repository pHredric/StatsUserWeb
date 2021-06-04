export enum CellType {
    Disabled,
    Ref,
    Value,
    RowHeader,
    ColumnHeader
}

class CellInfo {
    public cellType: CellType;
    public value: string;
    public width: number;

    constructor(typeOfCell:CellType, cellValue: string, cellWidth: number) {
        this.cellType = typeOfCell;
        this.value = cellValue;
        this.width = cellWidth;
    }
}

export default CellInfo