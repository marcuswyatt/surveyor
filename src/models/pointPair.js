export class PointPair {

    constructor(left = {X: 0, Y: 0}, right = {X: 0, Y: 0}) {
        this.Left = left;
        this.Right = right;
        this.Distance = 0;
        this.calculate();
    }

    calculate() {
        this.Distance = Math.sqrt(Math.pow(this.Left.X - this.Right.X, 2) + Math.pow(this.Left.Y - this.Right.Y, 2));
    }

    toString() {
        return `${this.Left.X?.toFixed(1)},${this.Left.Y?.toFixed(1)} ${this.Right.X?.toFixed(1)},${this.Right.Y?.toFixed(1)}`
    }
}