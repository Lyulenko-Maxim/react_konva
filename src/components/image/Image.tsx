import React, {FC, useEffect, useState} from 'react';
import {Image as KonvaImage} from "react-konva";
import {IImage} from "./Image.interfaces";


const Image: FC<IImage> = (
    {
        imageUrl,
        x,
        y,
        width,
        height,
    }
) => {
    const [image, setImage] = useState<CanvasImageSource | undefined>(undefined);

    useEffect(() => {
        const img = new window.Image();
        img.src = imageUrl;
        img.onload = () => {
            setImage(img);
        };
    }, [imageUrl]);

    return (
        <KonvaImage
            image={image}
            x={x}
            y={y}
            width={width}
            height={height}
        />
    );
};

export default Image;