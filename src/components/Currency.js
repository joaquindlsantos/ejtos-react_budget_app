import React, { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../context/AppContext';

const options = [
  { value: '$', label: '$ Dollar' },
  { value: '£', label: '£ Pound' },
  { value: '€', label: '€ Euro' },
  { value: '₹', label: '₹ Ruppee' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'green', // Cambia el color de fondo del control del dropdown
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'green', // Cambia el color de fondo del menú del dropdown
  }),
};

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (selectedOption) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: selectedOption.value,
    });
  };

  return (
    <div className='alert alert-secondary' style={{alignItems: 'center'}}>
      Currency
      <Select
        options={options}
        onChange={changeCurrency}
        styles={customStyles} // Aplica los estilos personalizados al dropdown
      />
    </div>
  );
};

export default Currency;


// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const Currency = () => {
//   const { dispatch } = useContext(AppContext);

//   const changeCurrency = (val) => {
//     dispatch({
//       type: 'CHG_CURRENCY',
//       payload: val,
//     })
//   }


//   return (
//     <div className='alert alert-secondary'> Currency {
//       <select name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)}>
//         <option value="$">$ Dollar</option>
//         <option value="£">£ Pound</option>
//         <option value="€">€ Europe</option>
//         <option value="₹">₹ Ruppee</option>
//       </select>
//     }
//     </div>
    
//   );
// };

// export default Currency;