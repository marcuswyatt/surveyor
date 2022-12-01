import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import CoordinateContext from "../../context/coordinates/coordinateContext";

const CoordinatesResults = () => {
    const coordinateContext = useContext(CoordinateContext);
    const { loading, pointPairs } = coordinateContext;

    if (loading) {
        return <Spinner />;
    } else {
        const sorted = pointPairs.sort((a, b) => b.Distance - a.Distance);
        if(sorted.length === 0) {
            return (
                <div></div>
            );
        } else {
            const closest = sorted[sorted.length - 1];
            const furthest = sorted[0];
            const averageDistance = sorted.reduce((ty, pair) => ty + pair.Distance, 0) / sorted.length;
            return (
                <div style={coordinatesResultsStyle}>
                    <div className='card text-center'>
                        <h3>Results</h3>
                        <div className='card text-center'>
                            <div className='badge badge-light'><b>Closest:</b> {closest.toString()}  <b>Distance:</b> {closest.Distance?.toFixed(2)}</div>
                            <div className='badge badge-light'><b>Furthest:</b> {furthest.toString()}  <b>Distance:</b> {furthest.Distance?.toFixed(2)}</div>
                            <div className='badge badge-light'><b>Average Distance:</b> {averageDistance.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            );
        }
    }
};

const coordinatesResultsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridGap: '1rem',
};

export default CoordinatesResults;