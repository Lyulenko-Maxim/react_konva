export const isCellMatchingParity = (
    parity: "even" | "odd" | undefined,
    row: number,
    column: number
): boolean => {

    if (!parity) {
        return true
    }

    if (parity === "even") {
        return row % 2 === 0 && column % 2 === 0;
    }

    if (parity === "odd") {
        return row % 2 !== 0 && column % 2 !== 0;
    }

    return false;
};