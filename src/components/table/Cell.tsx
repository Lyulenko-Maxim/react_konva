import React, {FC} from 'react';
import {Rect, Text} from 'react-konva';
import {ICell} from "./Table.interfaces";


const Cell: FC<ICell> = (
    {
        x,
        y,
        cellWidth,
        cellHeight,
        text,
    }
) => (
    <>
        <Rect
            x={x}
            y={y}
            width={cellWidth}
            height={cellHeight}
            stroke="black"
        />
        <Text
            x={x}
            y={y}
            width={cellWidth}
            height={cellHeight}
            text={text}
            align="center"
            verticalAlign="middle"
        />
    </>
);

export default Cell