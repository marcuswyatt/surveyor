import {Point} from "./point";
import {PointPair} from "./pointPair";

class PointPairBuilder {
    build(inputString) {
        if (inputString === undefined || inputString === null || inputString === '') {
            throw new Error('Please enter your coordinates!');
        }

        let result = [];

        const points = [];
        const pairs = inputString.trim()?.split(' ');
        pairs.forEach((pair) => {
            const pointValues = pair.split(',');
            if(pointValues.length !== 2) {
                throw new Error('Incorrect Point values entered!')
            }
            const x = Number(pointValues[0]);
            const y = Number(pointValues[1]);
            points.push(new Point(x, y))

        });

        for (let i = 0; i < points.length; i++) {
            for (let k = i + 1; k < points.length; k++) {
                if (points[i] && points[k] && points[i] !== points[k]) {
                    result.push(new PointPair(points[i], points[k]))
                }
            }
        }

        return result;
    }

}

export default PointPairBuilder;