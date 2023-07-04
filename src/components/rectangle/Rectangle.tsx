import React, {FC} from 'react';
import {Rect} from 'react-konva';
import {IRectangle} from "./Rectangle.interfaces";

const Rectangle: FC<IRectangle> = (
    {
        x,
        y,
        width,
        height,
        fill
    }
) => {
    return (
        <Rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={fill}
        />
    );
};

export default Rectangle;