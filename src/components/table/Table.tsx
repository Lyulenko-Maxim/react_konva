import React, {FC} from 'react';
import Cell from "./Cell";
import {ITable, ICell} from "./Table.interfaces";
import {isCellMatchingParity} from "./isCellMatchingParity";


const Table: FC<ITable> = (
    {
        x,
        y,
        rows,
        columns,
        cellWidth,
        cellHeight,
        parity
    }
) => {

    const cells: ICell[] = [];

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            cells.push({
                x: column * cellWidth + x,
                y: row * cellHeight + y,
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                text: isCellMatchingParity(parity, row, column) ? `(${row}, ${column})` : '',
            });
        }
    }

    return (
        <>
            {cells.map((cell, index) => (
                <Cell key={index} {...cell} />
            ))}
        </>
    );
};

export default Table;
