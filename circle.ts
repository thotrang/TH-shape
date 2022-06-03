export class Circle {
    color: string;
    radius: number;
    filler: boolean;
    constructor(color: string, radius: number, filler: boolean) {
        this.color = color;
        this.radius = radius;
        this.filler = filler;
    }
    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter(): number {
        return 2 * this.radius * Math.PI;
    }
}