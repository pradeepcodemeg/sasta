import React from 'react';
import Select from 'react-select';

const SelectBoxTwo = ({ options, newStatus , setNewStatus }) => {
    // const placeholder = 'Select Runner';
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: state.isFocused ? '1px solid #b5b5c3' : '1px solid #e4e6ef',
            borderRadius: '4px',
            boxShadow: 'none',
            '&:hover': {
                border: '1px solid #b5b5c3',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#ffffff' : '#ffffff',
            color: state.isFocused ? '#000000' : '#000000',
            '&:hover': {
                backgroundColor: '#f4fde5',
                color: '#9fc55e',
            },
        }),
    };

    if (newStatus && setNewStatus) {
        return <Select styles={customStyles} placeholder={newStatus.value} options={options} onChange={(e) => setNewStatus(e.value)}/>;
    }

    return <Select styles={customStyles} options={options} onChange={(e) => console.log(e)} placeholder={newStatus.value} />;

};

export default SelectBoxTwo;
