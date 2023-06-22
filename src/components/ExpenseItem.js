import React, { useContext } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';
import { TiDelete } from "react-icons/ti";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  // Cambiar por decreaseAllocation
  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    });

  }
  const reduceAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'RED_EXPENSE',
      payload: expense
    });

  }

  return (
    <tr>

      <td>{props.name}</td>
      <td>{currency}{props.cost}</td>
      <td><FaPlusCircle size='2.2em' color="green" onClick={event => increaseAllocation(props.name)}></FaPlusCircle></td>
      <td><FaMinusCircle size='2.2em' color="red" onClick={event => reduceAllocation(props.name)}></FaMinusCircle></td>
      {/* Cambiar por decreaseAllocation */}
      <td><TiDelete size='1.5em'  onClick={handleDeleteExpense}></TiDelete></td>


    </tr>
  );
};

export default ExpenseItem;
