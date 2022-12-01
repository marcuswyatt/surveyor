import React, { Fragment } from 'react';
import CoordinatesForm from "../coordinates/CoordinatesForm";
import CoordinatesResults from "../coordinates/CoordinatesResults";

const Home = () => (
    <Fragment>
        <div className='grid-2'>
            <div>
                <CoordinatesForm />
            </div>
            <div>
                <CoordinatesResults />
            </div>
        </div>
    </Fragment>
);

export default Home;