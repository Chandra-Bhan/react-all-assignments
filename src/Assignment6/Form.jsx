import React, { useState ,useRef} from 'react';
import styles from './Form.module.css';



// "Create an input and a button named AddMore . When we
//  click on the button it should add one more input on the
//   page. And also collects data when we type on inputs."


function Form() {
    const [customerName, setCustomerName] = useState();
    const [selectedProduct, setSelectedProduct] = useState("");
    const [usersAllData, setUsersAllData] = useState([]);
    const [currentTxtboxValue, setCurrentTxtboxValue] = useState("");
    const [isTrue, setIsTrue] = useState(false);
    const [date,setDate]=useState(new Date().toLocaleDateString());
    const total=useRef(0);

    const handleAddMoreTextBox = () => {
        setIsTrue(false);
        const price = Math.round(Math.random() * 50);
        setUsersAllData([...usersAllData, { item: selectedProduct, quantity: currentTxtboxValue, price: price, total: price * currentTxtboxValue }]);
        setCurrentTxtboxValue("");    
        setSelectedProduct("0");
    }


    const handleSubmission = () => {    
       
        setIsTrue(true);      
          total.current=usersAllData.reduce((acc,current)=>{
            return Number(acc.total) +Number(current.total);
          })
          console.log(total);

        
    }


    const handleRefresh=()=>{
        setUsersAllData([]);
        setCurrentTxtboxValue("");
        setSelectedProduct("0");
        setIsTrue(false);
    }

    return (
        <div>
            <div>
                <h1>Assignment 6 Day-3 add-unlimited-txtbox-and-store-data</h1>
                <h1>Billing Form</h1>
                <label>Customer Name </label>
                <br />
                <input type='text' placeholder='Customer Name' value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                <br />
                <hr /><hr />
                {
                    usersAllData.map((item, index) =>
                        <div key={index}>
                            <div className={styles.iteratableDiv} >
                                <div className={styles.innerDiv}>
                                    <label> Select Product</label>
                                    <br />
                                    <select value={item.item} onChange={(e) => setSelectedProduct(e.target.value)}>
                                        <option value="0">Select</option>
                                        <option value="Sugar">Sugar</option>
                                        <option value="Ods">Ods</option>
                                        <option value="Coffee">Coffee</option>
                                    </select>
                                </div>
                                <div className={styles.innerDiv}>
                                    <label>Select Quantity</label>
                                    <br />
                                    <input placeholder="Quantity" type="text" value={item.quantity} onChange={(e) => setCurrentTxtboxValue(e.target.value)} />
                                </div>

                            </div>
                            <hr />
                        </div>
                    )
                }




                <div className={styles.iteratableDiv} >
                    <div className={styles.innerDiv}>
                        <label> Select Product</label>
                        <br />
                        <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                            <option value="0">Select</option>
                            <option value="Sugar">Sugar</option>
                            <option value="Ods">Ods</option>
                            <option value="Coffee">Coffee</option>
                        </select>
                    </div>
                    <div className={styles.innerDiv}>
                        <label>Select Quantity</label>
                        <br />
                        <input placeholder="Quantity" type="text" value={currentTxtboxValue} onChange={(e) => setCurrentTxtboxValue(e.target.value)} />
                    </div>
                    <div className={styles.innerDiv} >
                        <button onClick={handleAddMoreTextBox}>Add</button>

                    </div>
                </div>
                <hr />



                <button onClick={handleSubmission}>Create Bill</button>&nbsp;&nbsp;&nbsp;
                <button onClick={handleRefresh}>Refresh</button>
            </div>


            {
                isTrue &&

                <div>
                    <table>
                        <thead>
                            <tr>
                                <td colSpan={3}>Customer Name: {customerName} </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Date: {date} </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersAllData.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.item}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.total}</td>
                                    </tr>)
                            }
                            <tr>
                                <td colSpan={3}>Total</td>
                                <td>{total.current}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default Form;
