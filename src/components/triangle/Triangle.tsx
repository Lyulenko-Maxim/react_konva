import React, {FC} from 'react';
import {Line} from "react-konva";
import {ITriangle} from "./Triangle.interfaces";
import {checkTrianglePointsCount} from "./Triangle.validate";


const Triangle: FC<ITriangle> = (
    {
        points,
        fill
    }
) => {
    try {
        checkTrianglePointsCount(points)

    } catch (error) {
        console.error(error);
        return null
    }
    return (
        <Line
            points={points.flatMap((point) => [point.x, point.y])}
            closed={true}
            fill={fill}
        />
    )
};

export default Triangle;