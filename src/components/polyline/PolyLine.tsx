import React, {FC} from 'react';
import {Line} from 'react-konva';
import {LineConfig} from "konva/lib/shapes/Line";
import {IPolyline} from "./PolyLine.interfaces";


const Polyline: FC<IPolyline> = (
    {
        points,
        stroke,
        strokeWidth
    }
) => {
    const lineConfig: LineConfig = {
        points: points,
        stroke: stroke,
        strokeWidth: strokeWidth,
    };

    return <Line {...lineConfig} />;
};

export default Polyline;