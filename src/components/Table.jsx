import React, { useState } from 'react';

function Table() {

    const [number, setNumber] = useState(2);
    let tableOfNumber = [];


    for (let i = 1; i <= 10; i++) {
        tableOfNumber.push(number * i);
    }

    const handleChangeNumber = () => {
        setNumber(Math.round(Math.random() * 100));
    }


    return (
        <div>
            <h1 style={{color:"tomato"}}>Assignment 1 - Table Of Random Number</h1>
            <button onClick={() => handleChangeNumber()}>Change Number</button>


            <ul>
                {
                    tableOfNumber.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>

        </div>
    );
}

export default Table;
