import React,{useState,useContext} from 'react'
import {GlobalContext} from "../Context/GlobalState"
export const AddTransactionList = () => {

    const {addTransaction}=useContext(GlobalContext);
    const[text,setText]=useState('')
    const [amount, setAmount]=useState(0)

    const onSubmit=e=>{
        e.preventDefault();

        const newTransaction={
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <div>
        <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlfor="text"><h4>New Transaction</h4></label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label htmlfor="amount"
            ><h4>Amount </h4><br />
            </label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
        </div>
    )
}

export default AddTransactionList;