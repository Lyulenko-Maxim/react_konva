import {FC} from "react";
import {ISquare} from "./Rectangle.interfaces";
import Rectangle from "./Rectangle";

const Square: FC<ISquare> = (
    {
        size,
        ...props
    }
) => {
    return (
        <Rectangle width={size} height={size} {...props} />
    );
};

export default Square;