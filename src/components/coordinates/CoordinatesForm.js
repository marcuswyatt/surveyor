import React, { useState, useContext } from 'react';
import CoordinateContext from "../../context/coordinates/coordinateContext";
import AlertContext from "../../context/alert/alertContext";
const CoordinatesForm = () => {

    const coordinateContext = useContext(CoordinateContext);
    const [text, setText] = useState('');

    const alertContext = useContext(AlertContext);

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            coordinateContext.buildPointPairs(text);
        } catch (e) {
            alertContext.setAlert(e.message, 'danger');
        }
    };

    const onClear = () => {
        setText('');
        coordinateContext.clearPointPairs();
        alertContext.clearAlert();
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' name='text' placeholder='Enter your coordinates...' value={text} onChange={onChange} />
            <input type='submit' value='Calculate' className={text.length > 0 ? 'btn btn-dark btn-block' : 'btn btn-light btn-block'} disabled={text.length === 0} />
            </form>
            {text.length > 0 && (
                <button className='btn btn-light btn-block' onClick={onClear}>
                    Clear
                </button>
            )}
        </div>
    );
};

export default CoordinatesForm;