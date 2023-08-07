import React, { useState } from 'react'
import Select from 'react-select'

const SelectBox = ({ options  , activeOrderId , setActiveOrderId , actualOrderId }) => {
    console.log( activeOrderId  , actualOrderId)

    const handleClick =() =>{
        console.log("first")
    }
    return (
        // <Select options={options} />
        <div className='slect-main' >
            <div className='slect-box' onClick={()=> setActiveOrderId(actualOrderId)}>
                <p>Select Order Status</p>
            </div>
           <div className={`slct-drpdwn ${activeOrderId == actualOrderId ? 'block' : 'hidden'}`}>
                <ul className='slct-lstng'>
                    {options.map((opt,index)=><li className={``}><p>{opt.value}</p></li>)}
                </ul>
            </div>
        </div>
    )
}

export default SelectBox