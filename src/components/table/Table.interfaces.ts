export interface ICell {
    x: number,
    y: number,
    cellWidth: number,
    cellHeight: number,
    text?: string,
}

export interface ITable extends Omit<ICell, "text"> {
    rows: number,
    columns: number,
    parity?: "even" | "odd",
}



