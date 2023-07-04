import React, {FC} from 'react';
import Triangle from './Triangle';
import {IIsoscelesTriangle} from "./Triangle.interfaces";
import {Point} from "../../interfaces/Point.interfaces";

const IsoscelesTriangle: FC<IIsoscelesTriangle> = (
    {
        base,
        height,
        fill
    }
) => {
    const midpointX = (base[0].x + base[1].x) / 2
    const midpointY = (base[0].y + base[1].y) / 2

    const points: Point[] = [
        {x: base[0].x, y: base[0].y},
        {x: base[1].x, y: base[1].y},
        {x: midpointX, y: midpointY + height},
    ]

    return (
        <Triangle
            points={points}
            fill={fill}
        />
    )
};

export default IsoscelesTriangle;
