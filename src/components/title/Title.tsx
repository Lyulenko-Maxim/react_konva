import React, {FC} from 'react';
import {Text} from 'react-konva';
import {TextConfig} from "konva/lib/shapes/Text";
import {ITitle} from "./Title.interfaces";


const Title: FC<ITitle> = (
    {
        text,
        x,
        y,
        fontSize,
        fill
    }
) => {
    const textConfig: TextConfig = {
        text: text,
        x: x,
        y: y,
        fontSize: fontSize,
        fill: fill,
    };

    return <Text {...textConfig} />;
};

export default Title;
