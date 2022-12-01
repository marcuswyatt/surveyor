import {PointPair} from "./pointPair";
import {Point} from "./point";

it('handles default data', () => {
    const pointPair = new PointPair();
    expect(pointPair.Distance).toEqual(0)
});

it('calculate distance correctly (3,2 9,7)', () => {
    const left = new Point(3, 2);
    const right = new Point(9, 7);

    const pointPair = new PointPair(left, right);

    expect(pointPair.Distance).toEqual(7.810249675906654)
});