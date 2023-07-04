export interface IRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
}

export interface ISquare extends Omit<IRectangle, "width" | "height"> {
    size: number,
}