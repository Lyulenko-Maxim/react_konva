export class InvalidTriangleError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidTriangleError';
    }
}