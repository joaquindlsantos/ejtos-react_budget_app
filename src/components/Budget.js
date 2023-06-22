import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const MAX_BUDGET = 20000;

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

    const setBudget = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    type='number'
                    step='10'
                    min='0'
                    value={budget}
                    onChange={event => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;