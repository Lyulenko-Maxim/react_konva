import {InvalidTriangleError} from "./Triangle.errors";
import {Point} from "../../interfaces/Point.interfaces";

export const checkTrianglePointsCount = (points: Point[]) => {
    if (points.length !== 3) {
        throw new InvalidTriangleError('Треугольник должен иметь только 3 точки.');
    }
}