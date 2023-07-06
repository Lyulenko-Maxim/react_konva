import React, {useRef} from 'react';
import Konva from "konva";
import {Layer, Stage} from "react-konva";
import Title from "../title/Title";
import PolyLine from "../polyline/PolyLine";
import Table from "../table/Table";
import Rectangle from "../rectangle/Rectangle";
import Square from "../rectangle/Square";
import Triangle from "../triangle/Triangle";
import {Point} from "../../interfaces/Point.interfaces";
import IsoscelesTriangle from "../triangle/IsoscelesTriangle";
import Image from "../image/Image";
import download from 'downloadjs';
import {toSvg} from "html-to-image";

const Canvas = () => {
    const canvasRef = useRef<Konva.Layer>(null);

    const exportPNG = () => {
        if (canvasRef.current) {
            const dataURL = canvasRef.current.toDataURL({
                mimeType: 'image/png',
            });
            download(dataURL, 'canvas.png', 'image/png');
        }
    };

    const exportJPEG = () => {
        if (canvasRef.current) {
            const dataURL = canvasRef.current.toDataURL({
                mimeType: 'image/jpeg',
            });
            download(dataURL, 'canvas.jpeg', 'image/jpeg');
        }
    };

    const exportSVG = () => {
        if (canvasRef.current) {
            toSvg(canvasRef.current.getCanvas()._canvas)
                .then((dataUrl) => {
                    download(dataUrl, 'canvas.svg', 'image/svg+xml');
                });
        }
    };

    const trianglePoints: Point[] = [
        {x: 100, y: 300},
        {x: 200, y: 300},
        {x: 100, y: 250},
    ]

    const isoscelesTrianglePoints: Point[] = [
        {x: 300, y: 300},
        {x: 400, y: 300},
    ]

    return (
        <>
            <button onClick={exportPNG}>to PNG</button>
            <button onClick={exportJPEG}>to JPEG</button>
            <button onClick={exportSVG}>to SVG</button>

            <Stage width={window.innerWidth} height={3000}>
                <Layer ref={canvasRef}>
                    <Title
                        text="Заголовок"
                        x={100}
                        y={30}
                        fontSize={24}
                        fill={"black"}
                    />
                    <PolyLine
                        points={[100, 100, 200, 200, 300, 100, 400, 200, 500, 100]}
                        stroke={"red"}
                        strokeWidth={2}
                    />
                    <Triangle
                        points={trianglePoints}
                        fill={"black"}
                    />
                    <IsoscelesTriangle
                        base={isoscelesTrianglePoints}
                        height={-50}
                        fill={"black"}
                    />
                    <Rectangle
                        x={100}
                        y={400}
                        width={300}
                        height={200}
                        fill={"red"}
                    />
                    <Square
                        x={500}
                        y={400}
                        size={200}
                        fill={"blue"}
                    />
                    <Table
                        x={100}
                        y={700}
                        rows={5}
                        columns={5}
                        cellHeight={50}
                        cellWidth={200}
                    />
                    <Table
                        x={100}
                        y={1000}
                        rows={3}
                        columns={4}
                        cellHeight={50}
                        cellWidth={200}
                        parity={"even"}
                    />
                    <Table
                        x={100}
                        y={1200}
                        rows={4}
                        columns={6}
                        cellHeight={50}
                        cellWidth={200}
                        parity={"odd"}
                    />
                    <Image
                        imageUrl={"logo512.png"}
                        x={100}
                        y={1500}
                        width={512}
                        height={512}
                    />
                </Layer>
            </Stage>
        </>
    );
};

export default Canvas;