import PointPairBuilder from "./pointPairBuilder";

it('should throw error when passing invalid input', () => {
    const pointPairBuilder = new PointPairBuilder();
    expect(() => pointPairBuilder.build(''))
        .toThrow("Please enter your coordinates!");
});

it('should throw error when passing incorrect input', () => {
    const pointPairBuilder = new PointPairBuilder();
    expect(() => pointPairBuilder.build('0.0,1.0 3.5,8.0 4.0'))
        .toThrow("Incorrect Point values entered!");
});

it('should build 3 PointPairs', () => {
    const pointPairBuilder = new PointPairBuilder();
    const pointPairs = pointPairBuilder.build('0.0,1.0 3.5,8.0 4.0,3.1');
    expect(pointPairs.length).toEqual(3);
});

it('should build 5 PointPairs', () => {
    const pointPairBuilder = new PointPairBuilder();
    const pointPairs = pointPairBuilder.build(' 0,1.234 3,8 4,3 10,13');
    expect(pointPairs.length).toEqual(6);
});