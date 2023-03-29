import React, { useRef, useState } from 'react';
import styles from './LuckyNumber.module.css'

function LuckyNumber() {

    let luckyNumber = useRef(25);
    const [state, setState] = useState(0);
    const [congrats, setCongrats] = useState(null);
    const [count, setCount] = useState(1);
    const [disabledBtn,setDisabledBtn]=useState(false);


    function handleMatchNumber() {

        if(state!==0){
        if (Number(state) == luckyNumber.current) {
            setCongrats(`congratulations you guessed the right number in <${count}> attempts `)
            setDisabledBtn(true);

        }
        else if (Number(state) < luckyNumber.current) {
            alert('you guessed a smaller number ')
        } else {
            alert('you guessed a bigger number ')
        }
        setCount(count + 1);
    }
    }



    function handleReset() {
        luckyNumber.current = Math.random().toFixed(1) * 50 + 1;
        console.log(luckyNumber.current);
        setCongrats(null)
        setCount(1);
        setDisabledBtn(false)
    }



    return (
        <div className={styles.luckyDiv}>
            <h1 className={styles.congrats}>{congrats}</h1>
            <h2>Guess The Lucky Number Game</h2>
            <h3>Guess the number between 1 to 51</h3>
            <input type="text" placeholder='Guess lucky number' onChange={(e) => setState(e.target.value)} />
            <button onClick={handleMatchNumber} disabled={disabledBtn}>Match Number</button>
            <button onClick={handleReset}>Reset Lucky Number</button>

        </div>
    );
}

export default LuckyNumber;
