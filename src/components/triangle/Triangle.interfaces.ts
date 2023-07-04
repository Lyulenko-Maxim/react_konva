import {Point} from "../../interfaces/Point.interfaces";

export interface ITriangle {
    points: Point[];
    fill: string;
}

export interface IIsoscelesTriangle {
    base: Point[],
    height: number,
    fill: string,
}
